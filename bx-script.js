if ($(window).width() < 600) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      //slideWidth: 400,
      minSlides: 1,
      maxSlides: 1
    });
}else if ($(window).width() < 1000){
    $('.bxslider').bxSlider({
      mode: 'fade',
      //slideWidth: 400,
      minSlides: 2,
      maxSlides: 2
    });
}else{
    $('.bxslider').bxSlider({
      mode: 'fade',
      //slideWidth: 400,
      minSlides: 4,
      maxSlides: 4
    });
}
