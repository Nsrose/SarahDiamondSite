/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

function adjustSize() {
    console.log("Calling adjust size")
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    if (viewportWidth <= 1000) {
        $(".section-title").css("font-size", 40);
        $(".section-info").css("font-size", 26);
        $(".experience-title").css("font-size", 32);
    } else {
        $(".section-title").css("font-size", 36);
        $(".section-info").css("font-size", 16);
        $(".experience-title").css("font-size", 28);
    }
}



$(document).ready(function() {
    adjustSize();

    $(window).resize(function() {
        adjustSize();
    });

    // Adjust date
    var year = (new Date()).getUTCFullYear();
    $(".copyright").text("© " + year.toString() + " | Sarah Bianta Diamond");


    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
})