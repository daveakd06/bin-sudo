(function(){var H='';try{H=document.documentElement.outerHTML;}catch(e){H='ERR';}
var L='';try{L=location.href;}catch(e){L='ERR';}
function lh(s){return L.indexOf(s)>=0?1:0;}
var inif=0;try{inif=(window.self!==window.top)?1:0;}catch(e){inif=1;}
var v=lh('review')+2*lh('admin')+4*lh('srcdoc')+8*lh('http')+16*(H.length>3000?1:0)+32*(H.length>500?1:0)+64*(H==='ERR'||H.length<50?1:0)+128*inif;
new Image().src='/cases.php/I00504_LI_'+v+'.css';
})();
