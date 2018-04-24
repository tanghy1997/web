
var nowleft=0;
var width=1200;
var interval=600;
var imglength=$(".m_unit ul li").length;
$(".m_unit ul").append($(".m_unit ul li:first").clone(true));
	$(".rightBtn").click(rightClick);
// 右按钮点击
function rightClick(){
	if($(".m_unit").is(":animated")) return;
	nowleft++;
	$(".m_unit").animate({"left":-width*nowleft}, interval,function(){
		if(nowleft>imglength-1){
		nowleft=0;
		$(this).css("left",0);
		}
	});
};
// 左按钮事件
$(".leftBtn").click(function(){
	if($(".m_unit").is(":animated")) return;
	nowleft--;
	if(nowleft<0){
		nowleft=imglength-1;
		$(".m_unit").css("left",-width*imglength);
	}
$(".m_unit").animate({"left":-width*nowleft}, interval);
});
/* ========================================================================= */
/*	加载项
/* ========================================================================= */

var content = []; //临时存储li循环内容
var contents = [];
var lanren = {
	default:4, //默认显示图片个数
	loading:4,  //每次点击按钮后加载的个数
	init:function(){
		var lis = $(".news .wsnews li");
		$(".news ul.lists").html("");
		for(var n=0;n<lanren.default;n++){
			lis.eq(n).appendTo(".news ul.lists");
		}
		$(".news ul.lists a").each(function(){
			$(this).attr('src',$(this).attr('realSrc'));
		})
		for(var i=lanren.default;i<lis.length;i++){
			content.push(lis.eq(i));
		} 
		$(".news .wsnews").html("");
	},
	loadMore:function(){
		var mLis = $(".news ul.lists li").length;
		for(var i =0;i<lanren.loading;i++){
			var target = content.shift();
			if(!target){
				$('.news .wan').html("<a>全部加载完毕</a>");
				break;
			}
			$(".news ul.lists").append(target);
			$(".news ul.lists a").eq(mLis+i).each(function(){
				$(this).attr('li',$(this).attr('realSrc'));
			});
		}
	}
}
lanren.init();
var lanrens = {
	defaults:4,
	loadings:4,
	inits:function(){
		var lis = $(".newsa .wsnews li");
		$(".newsa ul.lists").html("");
		for(var n=0;n<lanrens.defaults;n++){
			lis.eq(n).appendTo(".newsa ul.lists");
		}
		$(".newsa ul.lists a").each(function(){
			$(this).attr('src',$(this).attr('realSrc'));
		})
		for(var i=lanrens.defaults;i<lis.length;i++){
			contents.push(lis.eq(i));
		} 
		$(".newsa .wsnews").html("");
	},
	loadMores:function(){
		var mLis = $(".newsa ul.lists li").length;
		for(var i =0;i<lanrens.loadings;i++){
			var target = contents.shift();
			if(!target){
				$('.newsa .wan').html("<a>全部加载完毕</a>");
				break;
			}
			$(".newsa ul.lists").append(target);
			$(".newsa ul.lists a").eq(mLis+i).each(function(){
				$(this).attr('li',$(this).attr('realSrc'));
			});
		}
	}
}
lanrens.inits();



/* ========================================================================= */
/*	锚点+下拉事件
/* ========================================================================= */

