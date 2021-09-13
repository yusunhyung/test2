$(function(){

/* 공지사항 1번째 클릭시 -모달창 보이기 */
$("notice ul li").first().click(function(){
    //$(".modal").css("display","block");
    //$(".modal").show();
    $(".modal").fadeIn();
});

/* 모달창 닫기버튼 클릭시 모달창 닫기 */
$(".modal button").click(function(){
    //$(".modal").hide();
    //$(".modal").css("display","none");
    $(".modal").fadeOut();
});

/* 네비게이션  */

/* $("ul.gnb>li").hover(function(){
    $("ul.sub").show();
},function(){
    $("ul.sub").hide();
}); */

/* $("ul.gnb>li").mouseover(function(){
    $("ul.sub").show();
});
$("ul.gnb>li").mouseout(function(){
    $("ul.sub").hide();
}); */

/*$("ul.gnb>li").mouseenter(function(){
    $("ul.sub").show();
});
$("ul.gnb>li").mouseleave(function(){
    $("ul.sub").hide();
});*/
$("ul.gnb>li").hover(function(){
//$("ul.sub").stop().slideDown();
$(this).children("ul.sub").stop().slideDown();
             
},function(){
//$("ul.sub").stop().slideUp();
$(this).children("ul.sub").stop().slideUp();
    });

/* 슬라이드 */
var slideI=0;
setInterval(function(){
    if(slideI<2){
        slideI++;
    }else{
        slideI=0;
    }
    console.log(slideI);
    $(".slide ul").animate({"top":(-300 * slideI)},500);
},3000);

});//ready end


