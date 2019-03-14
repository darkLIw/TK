
// swiper
new Swiper ('.jiantou',{
	autoplay: {
    	disableOnInteraction: false,
	},
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})        
	
var mySwiper= new Swiper('.swiper-wrapper', {
       //这里的常规的设置参数
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
        autoplay:1000,
        loopedSlides:5
    });
//  $('.swiper-wrapper').mouseover(function(){
//      mySwiper.stopAutoplay();
//  });
//  $('.swiper-wrapper').mouseout(function(){
//      mySwiper.startAutoplay();
//  });

$('.swiper-wrapper').on('mouseenter',function(){
	$(this).autoplay.stop();
});
$('.swiper-wrapper').on('mouseleave',function(){
	$(this).autoplay.start();
})


