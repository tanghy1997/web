jQuery(document).ready(function($) {
    $(".maodian a").click(function(event) { 
       var index=this.title
       var id='#'+'index_'+index
 $("html,body").animate({scrollTop: $(id).offset().top}, 1000);
 });
    $(".maodians a").click(function(event) { 
        var a=this.title
        var id='#'+'index_'+a
    $("html,body").animate({scrollTop: $(id).offset().top}, 1000);
});
});