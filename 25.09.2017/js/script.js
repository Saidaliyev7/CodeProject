$(document).ready(function () {
  $('#firstCarousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
  }); 
  $('#secondCarousel').owlCarousel({
    items: 3,
    loop: true,
    margin:3,
    dots:false,
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
  })

});