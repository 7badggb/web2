
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var d3 = document.getElementById('d3');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
d3.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
d3.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-800*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

var d6c1 = document.getElementById("d6c1");
var d6c2 = document.getElementById("d6c2");
d6c1.innerHTML=" "+"￥"+d6c2.firstChild.value;
d6c2.onclick = function(){
	d6c1.innerHTML=" "+"￥"+d6c2.value;
}

	var aaa = document.getElementById('aaa');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop||document.body.scrollTop;
		if(st>80){
			aaa.style.position = 'fixed';
		}else{
			aaa.style.position = 'static';
		}
	}

var speed = 40;
window.onload=function(){
    var d4bb=document.getElementById("d4bb");
    var d4bc=document.getElementById("d4bc");
    var d4b=document.getElementById("d4b");
    d4bc.innerHTML = d4b.innerHTML;
    function Marquee(){
    	if(d4bb.scrollTop>=d4b.offsetHeight){
        d4bb.scrollTop=0;
    	}
        else{
             	d4bb.scrollTop=d4bb.scrollTop+1;
            }
    }
    var MyMar=setInterval(Marquee,speed);
    d4bb.onmouseover=function(){clearInterval(MyMar)};
    d4bb.onmouseout=function(){MyMar=setInterval(Marquee,speed); };

}

var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');
var f4 = document.getElementById('f4');
var f3b = document.getElementById('f3b');
var f3c = document.getElementById('f3c');
f1.onmouseover = function(){
	animate(f1,{left:1370});
}
f1.onmouseout = function(){
	animate(f1,{left:1443})
}
f2.onmouseover = function(){
	animate(f2,{left:1355});
}
f2.onmouseout = function(){
	animate(f2,{left:1443})
}
f3.onmouseover = function(){
	animate(f3,{left:1370});
	f3b.style.display='none';
	f3c.style.display='block';
}
f3.onmouseout = function(){
	animate(f3,{left:1443})
	f3b.style.display='block';
	f3c.style.display='none';
}
f4.onmouseover = function(){
	animate(f4,{left:1370});
}
f4.onmouseout = function(){
	animate(f4,{left:1443})
}