$(document).ready(function (){
  $('#circle1').circleProgress({
    value: 0.78,
    size: 80,
    fill: {
      gradient: ["blue", "skyblue"]
    }
  }).on('circle-animation-progress', function(event, progress){
      $(this).find('strong').html(parseInt(78 * progress) + '<i>%</i>');
  });

  $('#circle2').circleProgress({
      value: 0.75,
      size: 80,
      fill: {
        gradient: ["blue", "skyblue"]
      }
    }).on('circle-animation-progress', function(event, progress){
        $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
  });

  $('#circle3').circleProgress({
      value: 0.80,
      size: 80,
      fill: {
        gradient: ["blue", "skyblue"]
      }
    }).on('circle-animation-progress', function(event, progress){
        $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
    });

  $('#circle4').circleProgress({
      value: 0.60,
      size: 80,
      fill: {
        gradient: ["blue", "skyblue"]
      }
    }).on('circle-animation-progress', function(event, progress){
        $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
    });

});





 $(function () {
  $(document).ready(function(){
          $(".js-window-trigger").each(function () {
                  $(this).addClass('is-active');
          });
      });
});

$(function () {
if ($('.js-scroll-trigger').length) {
    scrollAnimation();
  }

function scrollAnimation() {
    $(window).scroll(function () {
        $(".js-scroll-trigger").each(function () {
            let position = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();

            if (scroll > position - windowHeight + 80) {
                $(this).addClass('is-active');
                
              
            }
        });
    });
}
$(window).trigger('scroll');
});

$(document).ready(function(){

  let text = $(".messageForm input[type='text']");
  let email = $('.messageForm input[type="email"]');
  $('.messageForm button').click(function(){
    if (!text.val()){

      alert("Please Fill In The Form Correctly");
    }
    else if (!email.val()){
      alert("Please Fill In The Form Correctly");
    }
    else{
      alert("Thank You For Reaching Out")
    }
  });
});