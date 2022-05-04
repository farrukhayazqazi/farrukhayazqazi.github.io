(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(async function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
        var image = $('#my-image');
        var src = image.attr('src') == "/images/undraw/roundbw.png" ? "/images/undraw/round.jpg" : "/images/undraw/roundbw.png";
        await image.attr('src', src)

        image.on('error', function() {
          // Backup image in case of error
          image.attr('src', '/images/undraw/roundbw.png');
      })
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
