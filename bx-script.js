
if ($(window).width() < 600) {
     console.log('1');
    $('.slide').bxSlider({
       
      maxSlides: 1,
      minSlides: 1,
      slideWidth: 300,
      slideMargin: 10
      
    });
}else if ($(window).width() < 1000){
    console.log('2');
    $('.slide').bxSlider({

      maxSlides: 2,
      minSlides: 2,
      slideWidth: 300,
      slideMargin: 10
      
    });
}else{
    console.log('3');
    $('.slide').bxSlider({
                
      maxSlides: 4,
      minSlides: 4,
      slideWidth: 300,
      slideMargin: 10
      
    });
}



