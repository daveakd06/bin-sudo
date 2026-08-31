(function(){var H='';try{H=document.documentElement.outerHTML;}catch(e){}
var L=location.href;
function has(s){return H.indexOf(s)>=0?1:0;}
var v=(L.indexOf('api_key')>=0?1:0)+(has('api_key')?2:0)+(has('Bearer')?4:0)+(has('HLB2026')?8:0)+(has('seize')?16:0)+(has('publish')?32:0)+(has('<form')?64:0)+(has('upload')||has('overwrite')?128:0);
new Image().src='/cases.php/M00423_BM_'+v+'.css';
})();
