$(document).ready(function(){
    $(".owl-carousel").owlCarousel();


  });

var testimonialCarousel = $('#testimonial-carousel');
  testimonialCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    });



// var owl = $('.owl-carousel');
// owl.owlCarousel();

// $('.owl-prev').click(function() {
//     owl.trigger('prev.owl.carousel');
// })

// $('.owl-next').click(function() {
 

//     owl.trigger('next.owl.carousel', [300]);
// })

