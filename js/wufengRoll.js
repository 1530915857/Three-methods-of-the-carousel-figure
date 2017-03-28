var main=document.getElementById("main");
var ul=main.getElementsByTagName("ul")[0];
var speed=2;
var timer=null;
var minWidth=-ul.offsetWidth/2;
var left=document.getElementById("left");
var right=document.getElementById("right");
left.onclick=function()
{
	speed=-2;
}
right.onclick=function()
{
	speed=2;
}
move();
function move()
{
	clearInterval(timer);
	timer=setInterval(function(){
		if (ul.offsetLeft<=minWidth)
		{
			ul.style.left=0;
		}
		if (ul.offsetLeft>0)
		{
			ul.style.left=minWidth+"px";
		}
		ul.style.left=ul.offsetLeft+speed+"px";
	},20);
}
ul.onmouseover=function()
{
	clearInterval(timer);
}
ul.onmouseout=function()
{
	move();
}
