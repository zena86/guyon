jQuery(function() {
    
   //Слайдер Richard Parcker
    
    $('.slider').slick({
        //Скорость пролистывания по умолчанию 300ms
        speed: 1000,
        //Бесконечность слайдов
        infinite: false,
        // Выстраивает основной слайд по центру
        centerMode: true,
        centerPadding: '27.3vw',
    });
$('.slider').slick('goTo',1);
    
    //Слайдер Amazing Features
    
$('.fade').slick({
    infinite: true,
    speed: 50,
    fade: true,
    cssEase: 'linear',
});
    //Слайдер Screenshots
    
$('.fadeScreenshots').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 50,
    fade: true,
    cssEase: 'linear'
});
    
    //Видео
    
    $('.sectionWithVideo').click(function () {  
   var mediaVideo = $("#guysVideo").get(0);    
   if (mediaVideo.paused) {
       mediaVideo.play();
       $(".iconAndTimeVideo").hide();
   } else {
       mediaVideo.pause();
       $(".iconAndTimeVideo").show();
  }
});   
}); 



