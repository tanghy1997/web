/* ========================================================================= */
/*  选项卡
/* ========================================================================= */


window.onload=function(){
    var odiv=document.getElementById('options');//获取div
    var btn=odiv.getElementsByTagName('input');//获取div下的input
    var div2=odiv.getElementsByTagName('div') ;//获取div下的div
    for(i=0;i<btn.length;i++){//循环每个按钮
      btn[i].index=i 
//btn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
    btn[i].onclick=function(){//按钮的第i个点击事件
      for(i=0;i<btn.length;i++){//循环去掉button的样式，把div隐藏
          btn[i].className='' //清空按钮的样式
          div2[i].style.display='none'//隐藏div
          }
        this.className='active'//自身添加active
        div2[this.index].style.display='block'//this.index是当前div 
      }
    }
    "use strict";
    document.getElementById('loading-mask').style.display = 'none';//加载项
}
/* ========================================================================= */
/*  自动轮播图
/* ========================================================================= */
var nowleft=0;
var width=595;
var interval=2000;
var imglength=$(".bok-im ul li").length;
$(".bok-im ul").append($(".bok-im ul li:first").clone(true));

// 图片自动播放
var timer=setInterval(rightClick, interval);

 // 鼠标进入暂停
$(".carousel").mouseenter(function() {
     clearInterval(timer);
 });
 
$(".carousel").mouseleave(function() {
  timer=setInterval(rightClick, 1000);
 });

$(".rightBtn").click(rightClick);

// 右按钮点击
function rightClick(){
  if($(".bok-im").is(":animated")) return;
  nowleft++;

  $(".bok-im").animate({"left":-width*nowleft}, interval,function(){
    if(nowleft>imglength-1){
      nowleft=0;
      $(this).css("left",0);
    }
  });
};


// 左按钮事件
$(".leftBtn").click(function(){
  if($(".bok-im").is(":animated")) return;
  nowleft--;
  if(nowleft<0){
    nowleft=imglength-1;
    $(".bok-im").css("left",-width*imglength);
  }
  $(".bok-im").animate({"left":-width*nowleft}, interval);
});

// animate.css
jQuery(document).ready(function($) {
   $(".bottom a").click(function(event) { 
      var index=this.title
      var id='#'+'index_'+index
     $("html,body").animate({scrollTop: $(id).offset().top}, 1000);
   });
   $(".taoba").click(function(event) { 
      var index=this.title
      var id='#'+'index_'+index
     $("html,body").animate({scrollTop: $(id).offset().top}, 1000);
   });
    function a(x,y){
      l = $('#main').offset().left;
      w = $('#main').width();
      $('#tbox').css('left',(l + w + x) + 'px');
      $('#tbox').css('bottom',y + 'px');
  }//获取#tbox的div距浏览器底部和页面内容区域右侧的距离函数#main为页面的可视宽度
  $(function() {  
      $(window).scroll(function(){
        t = $(document).scrollTop();
        if(t>80){
            $('#tbox').show();
        }else{
          $('#tbox').hide();
        }
        if(t > 50){
            $('#gotop').fadeIn('slow');
        }else{
          $('#gotop').fadeOut('slow');
        }       
    })   
      a(10,100);//#tbox的div距浏览器底部和页面内容区域右侧的距离
      $('#gotop').click(function(){ 
          $('body,html').animate({
              scrollTop: 0
          },
          800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
          return false;  
      })
  });
});
 