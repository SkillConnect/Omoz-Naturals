!(function($) {
  "use strict";
  
  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 60000,
    autoplayHoverPause: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });
})(jQuery);


setInterval(function() {
  var src = document.getElementById("sliderImage").src
  var number = parseInt(src.split("/d")[1].split(".jpg")[0])
  if(number!=5) number+=1
  else number = 1

  document.getElementById("sliderImage").src = `./assets/img/slide/d${number}.jpg`
}, 6000)