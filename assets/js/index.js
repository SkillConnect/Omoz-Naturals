!(function($) {
  "use strict";
  
  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

})(jQuery);


setInterval(function() {
  var src = document.getElementById("sliderImage").src
  var number = parseInt(src.split("/d")[1].split(".jpg")[0])
  if(number!=5) number+=1
  else number = 1

  document.getElementById("sliderImage").src = `./assets/img/slide/d${number}.jpg`
}, 6000)