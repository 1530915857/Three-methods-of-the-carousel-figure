var index=0;
var timer=null;
var length=$("ul li").length;
start();
function start()
{
	clearInterval(timer);
	timer=setInterval(function(){
		index++;
		if (index==length)
		{
			index=0;
		}
		show();
	},2000);
}
$("ul li").mouseover(function(){
	index=$(this).index();
	show();
	clearInterval(timer);
}).mouseout(function(){
	start();
});
function show()
{
	$("ul li").eq(index).addClass("select").siblings().removeClass("select");
	$(".roll:eq("+index+")").addClass("select").siblings().removeClass("select");
}
