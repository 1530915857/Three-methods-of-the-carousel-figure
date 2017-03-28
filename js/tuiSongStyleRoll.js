var index=0;
var timer=null;
var length=$(".roll").length;
var $before=index;
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
		show(true);
		$before=index;
	},2000);
}
$("ul li").mouseover(function(){
	index=$(this).index();
	clearInterval(timer);
	show(false);
	$before=index;
}).mouseout(function(){
	start();
});
function show(flag)
{
	$("ul li").eq(index).addClass("select").siblings().removeClass("select");
	if (!flag) 
	{
		if ($before<index)
		{
			$(".roll").eq($before).stop().animate({"left":"-600px"});
			$(".roll").eq(index).css({"left":"600px"}).stop().animate({"left":"0"});
		}
		else if(index<$before)
		{
			$(".roll").eq($before).stop().animate({"left":"600px"});
			$(".roll").eq(index).css({"left":"-600px"}).stop().animate({"left":"0"});
		}
	} 
	else
	{
		$(".roll").eq($before).stop().animate({"left":"-600px"});
		$(".roll").eq(index).css({"left":"600px"}).stop().animate({"left":"0"});
	}
}
