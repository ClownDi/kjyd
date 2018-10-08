$(function(){
             //页面字体大小
var html = document.getElementsByTagName('html')[0];
var w = document.documentElement.clientWidth || document.body.clientWidth;
if(w<750){
	html.style.fontSize = 20*(w / 320) + "px"; 
}else{
	html.style.fontSize = "46.875px"; 
}

$(".menu").click(function(){
	$(".mnav_box").animate({ left:"0px"})
})
$(".nav_close").click(function(){
	$(".mnav_box").animate({ left:"100%"})

})

$(".page_gg").click(function(){
	 $('body,html').animate({
                scrollTop: 0
            }, 600);
})

function isContains(str, substr) {
    return new RegExp(substr).test(str);
}

  // $(".xz_span").live("click",function(){ 
  // 			var spanac = "span_active" 
  //           var clastr = $(this).attr("class");  
  //           var pdstr = isContains(clastr, spanac)
  //           if(pdstr){
  //           	$(this).removeClass("span_active")
  //           }else{
  //           	$(this).addClass("span_active")
  //           }
  //       }); 
})
