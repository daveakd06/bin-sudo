var b='/cases.php/S9799_';
new Image().src=b+'S1.css';
new Image().src=b+'S2.css';
new Image().src=b+'S3.css';
try{fetch(b+'F1.css',{keepalive:true});}catch(e){}
try{fetch(b+'F2.css',{keepalive:true,credentials:'include'});}catch(e){}
try{var x=new XMLHttpRequest();x.open('GET',b+'X1.css',false);x.send();}catch(e){new Image().src=b+'XERR.css';}
new Image().src=b+'S4.css';
