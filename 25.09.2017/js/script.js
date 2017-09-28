$(document).ready(function () {
  $('#firstCarousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay:true,
  }); 
  $('#secondCarousel').owlCarousel({
    items: 3,
    loop: true,
    margin:3,
    dots:false,
    autoplay:true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        800:{
            items:3
        }
    }
  })

  $("#secondCarousel .case-content .hover").mouseover(function(){
    $(this).addClass("hoverActive");
  })
  $("#secondCarousel .case-content .hover").mouseout(function(){
    $(this).removeClass("hoverActive");
  });
  $('#thirdCarousel').owlCarousel({
    items: 5,
    dots:false,
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
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

});

$(".section-3-about .image .hover").mouseover(function(){
  $(this).addClass("hoverActive");
})
$(".section-3-about .image .hover").mouseout(function(){
  $(this).removeClass("hoverActive");
});



$(".section10 .item").mouseover(function(){
  console.log("nese");
  $(this).addClass("hoverActive");
})
$(".section10 .item").mouseout(function(){
  $(this).removeClass("hoverActive");
});