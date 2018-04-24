// nav上的点滑动效果
(function(){
	var resetNavSelector;
	$(".mainmenu .sf-menu li").hover(
	function(){
		var currentLink = $(this);
		console.log(currentLink.width())
		clearTimeout(resetNavSelector);  
		$(".mainmenu .sf-menu li#selector").animate(
			{ 
				width : currentLink.width(), 
				left: currentLink.position().left 
			}, {  
				duration : 300,  
				easing : "swing",  
				queue : false  
		});
	}, function(){
		resetNavSelector = setTimeout(function() {  
			$(".mainmenu .sf-menu li#selector").animate({ width : $(".mainmenu .sf-menu li.actives").width(), left: $(".mainmenu .sf-menu li.actives").position().left }, 200);
	    }, 200); 
	});
})();

(function(){
	$wrapper = $('#wrapper'); 
	$drawerRight = $('#drawer-right');
	function setSlideNav(){
		jQuery(".toggleDrawer").click(function(e){
			//alert($wrapper.css('marginRight'));
			e.preventDefault();

			if($wrapper.css('marginLeft')=='0px'){
				$drawerRight.animate({marginRight : 0},500);
				$wrapper.animate({marginLeft : -300},500);
			}
			else{
				$drawerRight.animate({marginRight : -300},500);
				$wrapper.animate({marginLeft : 0},500);
			}
			
		})
	}

	function setHeaderBackground() {		
		var scrollTop = jQuery(window).scrollTop(); // 导航背景颜色出现位置	
		
		if (scrollTop > 100 || jQuery(window).width() < 700) { 
			jQuery('#header .top').addClass('solid');
		} else {
			jQuery('#header .top').removeClass('solid');		
		}

		if (scrollTop > 100 || jQuery(window).width() < 700) { 
			jQuery('#mainmenu .sf-menu .block').addClass('solids');
		} else {
			jQuery('#mainmenu .sf-menu .block').removeClass('solids');		
		}

		if (scrollTop > 100 || jQuery(window).width() < 700) { 
			jQuery('#mainmenu .sf-menu .block .zooz').addClass('solids');
		} else {
			jQuery('#mainmenu .sf-menu .block .zooz').removeClass('solids');		
		}
	}

	setSlideNav();
	setHeaderBackground();

	jQuery('nav > ul > li > a').click(function(e){
		e.preventDefault();
		jQuery.scrollTo(jQuery(this).attr('href'), 400, { offset:-(jQuery('#header .top').height()), axis:'y' });
	})

	jQuery(window).scroll( function() {
	   setHeaderBackground();
	});

})();

// 回到顶部按钮的显示及效果
 jQuery(document).ready(function($) {
   	$(".zooz div a").click(function(event) { 
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