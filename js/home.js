/* OwlCarousel */
$(document).ready(function(){
    $(".slider_area").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        loop: true,
        smartSpeed: 800,
        autoplay:true,
        autoplayTimeout: 2500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });
})


// Counter Up
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 700,
    });
});

/* Ref OwlCarousel */
$(document).ready(function(){
    $(".resef_slider").owlCarousel({
        items: 5,
        smartSpeed: 800,
        loop: true,
        smartSpeed: 800,
        autoplay:true,
        autoplayTimeout: 2500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });
})