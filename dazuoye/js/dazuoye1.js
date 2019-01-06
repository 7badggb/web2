var f2f = document.getElementById('f2f');
var f2g = document.getElementById('f2g');
var f2o = document.getElementById('f2o');
f2f.onclick = function(){
	f2o.innerHTML='"150ml"'
	f2f.className="f2f";
	f2g.className="f2g"
}
f2g.onclick = function(){
	f2o.innerHTML='"200ml"'
	f2g.className="f2f";
	f2f.className="f2g"
}
var f2i = document.getElementById('f2i');
var f2j = document.getElementById('f2j');
var f2k = document.getElementById('f2k');
f2i.onclick = function(){
	if(parseInt(f2j.value)>1)
		f2j.value=parseInt(f2j.value)-1;
}
f2k.onclick = function(){
	if(parseInt(f2j.value)<5)
	f2j.value=parseInt(f2j.value)+1;
}
var f1a = document.getElementById('f1a');
var f1b = document.getElementById('f1b');
var f1c = document.getElementById('f1c');
var f1a = document.getElementById("f1a");
var f11a = document.getElementById("f11a");
var slider = document.getElementById("slider");
var bimg = document.getElementById("bimg");
var simg = document.getElementById("simg");

var ev1 = function(){
	f1b.className = "f1b";
	f1c.className = "f1c";
	simg.src = "imgs/pp0.jpeg";
	bimg.src = "imgs/pp0.jpeg";
}
var ev2 = function(){
	f1b.className = "f1c";
	f1c.className = "f1b";
	simg.src = "imgs/pp1.jpeg";
	bimg.src = "imgs/pp1.jpeg";
}
f1b.onmouseover = function(){
	ev1();
}
f1c.onmouseover = function(){
	ev2();
}

f1a.onmouseover=function(){
	slider.style.display='block';
	f11a.style.display='block';
 }
f1a.onmouseout=function(){
	slider.style.display='none';
	f11a.style.display='none';
}
f1a.onmousemove=function(ev){
	var ev=ev||event;	  
	var oL=ev.clientX-f1a.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-f1a.getBoundingClientRect().top-slider.offsetHeight/2;  
	var oMaxw=f1a.offsetWidth-slider.offsetWidth;
	var oMaxh=f1a.offsetHeight-slider.offsetHeight;  
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
	var oBmaxw = f11a.offsetWidth - bimg.offsetWidth; 
	var oBmaxh = f11a.offsetHeight - bimg.offsetHeight; 
	bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
	bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
}
var f2n = document.getElementById('f2n');
var o5 = document.getElementById('o5');
var o = document.getElementById('o');
var o1 = document.getElementById('o1');
var o3 = document.getElementById('o3');
f2n.onclick = function(){
	o5.style.display = 'block';
	o.style.display = 'block';
}
o1.onclick = function(){
	o5.style.display = 'none';
	o.style.display = 'none';
}
o3.onclick = function(){
	o5.style.display = 'none';
	o.style.display = 'none';
}