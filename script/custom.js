/*햄버거 버튼 메뉴*/
const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active-1');
});

    

/*블랙 메뉴 창 페이드 토글*/   
$( document ).ready( function() {
  $(".right_menu").click( function() {
    $(".menupage").fadeToggle();
  })
});

    
    
/*메인 배너 페이드 아웃*/
setTimeout(function() {
    $('.main-banner1').fadeOut(50);
}, 4900)

    
    
/*메인 배너 페이드 인*/
setTimeout(function() {
    $('.main-banner2').fadeIn(100);
}, 4900)

    

/*팝업*/
$(".layer .close").click(function(){
    $(".layer").hide();
});    
    
    

/*블랙 백그라운드*/
$(window).scroll(function() {
  
  var $window = $(window),
      $body = $('body'),
      $panel = $('.page');
  
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
     
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();


    
    
/*가로 스크롤*/

"use strict"

document.addEventListener('scroll', horizontalScroll);

let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

function horizontalScroll(){

    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 1;
    }
}

    

/*뉴스피드 화살표 컨텐츠 이동*/       
    $(document).ready(function(){
    var i = 0;
    $('.right-arrow').click(function(){
        i++;
        if(i > 2){
            i = 0;
        }
        $('.feed-contents').animate({
            left: -900 * i
        });
    });

    
    $('.left-arrow').click(function(){
        i--;
        if(i < 0){
            i = 2;
        }
        $(".feed-contents").animate({
            left: -900 * i
        });
    });
});    



/*업커밍 마우스 오버 배경색상 변경*/
$(document).ready(function(){
    	$(".upcoming-img img").hover(function(){
    		$(".background").css("height", "100vh");
    	}, function(){
    		$(".background").css("height", "0");
    	})
    });
    
    

/*스크롤 애니메이션*/
$(window).scroll(function(){
        var scroll_top = $(this).scrollTop();

        /*로케이션*/
        if(scroll_top>= $('.total-txt').offset().top-$(this).height()){
           $('.total-txt').addClass('ani');
        }else{
            $('.total-txt').removeClass('ani');
        }
    
        if(scroll_top>= $('.right-img .cover-box').offset().top-$(this).height()){
           $('.right-img .cover-box').addClass('ani');
        }else{
            $('.right-img .cover-box').removeClass('ani');
        }

        /*가로 스크롤 page01*/
        if(scroll_top>= $('.content01 .fix ul li p').offset().top-$(this).height()){
           $('.content01 .fix ul li p').addClass('ani');
        }else{
            $('.content01 .fix ul li p').removeClass('ani');
        }

        if(scroll_top>= $('.line').offset().top-$(this).height()){
           $('.line').addClass('ani');
        }else{
            $('.line').removeClass('ani');
        }

        /*뉴스피드*/
        if(scroll_top>= $('.newsfeed .title').offset().top-$(this).height()){
           $('.newsfeed .title p').addClass('ani');
        }else{
            $('.newsfeed .title p').removeClass('ani');
        }

        if(scroll_top>= $('.newsfeed .subtitle p').offset().top-$(this).height()){
           $('.newsfeed .subtitle p').addClass('ani');
        }else{
            $('.newsfeed .subtitle p').removeClass('ani');
        }

        /*뉴스레터*/
        if(scroll_top>= $('.newsletter01').offset().top-$(this).height()){
           $('.newsletter01').addClass('ani');
        }else{
            $('.newsletter01').removeClass('ani');
        }

        if(scroll_top>= $('.newsletter02').offset().top-$(this).height()){
           $('.newsletter02').addClass('ani');
        }else{
            $('.newsletter02').removeClass('ani');
        }

        if(scroll_top>= $('.sub-boxline .top').offset().top-$(this).height()){
           $('.sub-boxline .top').addClass('ani');
        }else{
            $('.sub-boxline .top').removeClass('ani');
        }

        if(scroll_top>= $('.square').offset().top-$(this).height()){
           $('.square').addClass('ani');
        }else{
            $('.square').removeClass('ani');
        }

        /*푸터*/
        if(scroll_top>= $('.footer-list').offset().top-$(this).height()){
           $('.footer-list').addClass('ani');
        }else{
            $('.footer-list').removeClass('ani');
        }
});
		
    
  
/*페이지 좌측 하단 주소 없애기*/
$("body").on('mouseover', 'a', function (e) {
      var $link = $(this),
           href = $link.attr('href') || $link.data("href");
 
      $link.off('click.chrome');
      $link.on('click.chrome', function () {
         window.location.href = href;
      }).attr('data-href', href)
      .css({ cursor: 'pointer' })
      .removeAttr('href');
});    