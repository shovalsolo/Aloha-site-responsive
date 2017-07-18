

if ($(window).width() < 600) {
    $('.slide').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      mode: 'fade',
      slideWidth: 400,
      
    });
}else if ($(window).width() < 1000){
    $('.slide').bxSlider({
      minSlides: 2,
      maxSlides: 2,
      mode: 'fade',
      slideWidth: 400,
      
    });
}else{
    $('.slide').bxSlider({
      minSlides: 4,
      maxSlides: 4,
      mode: 'fade',
      slideWidth: 400,
      
    });
}







/* working 
$('.slide').bxSlider({
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 360,
  slideMargin: 10
});*/


