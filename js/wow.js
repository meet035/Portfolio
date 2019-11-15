
var soft = document.getElementById("hard");
  var hard = document.getElementById("soft");
  var ware = document.getElementById("ware");

  soft.addEventListener("mouseover", softmouseOver);
  soft.addEventListener("mouseout", softmouseOut);
  hard.addEventListener("mouseover", hardmouseOver);
  hard.addEventListener("mouseout", hardmouseOut);

  function softmouseOver() {
    ware.style.color = "#c6e377";
  }

  function softmouseOut() {
    ware.style.color = "#3b7c06";
  }

  function hardmouseOver() {
    ware.style.color = "#40514E";
  }

  function hardmouseOut() {
    ware.style.color = "#3b7c06";
  }

  var parallax = document.getElementById("parallax");
  var passion = document.getElementById("passion");

  window.addEventListener("scroll", function() {
    var offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.6 + "px";
  });

  window.addEventListener("scroll", function() {
    var offset = window.pageYOffset;
    passion.style.backgroundPositionY = offset * (-0.5) + "px";
  });

  (function($) {
    new WOW().init();
  })(jQuery);

  var navi_bar = document.getElementById("navi");

  navi_bar.addEventListener("mouseover", onmouseOver);
  navi_bar.addEventListener("mouseout", onmouseOut);

  function onmouseOver() {
    navi_bar.style.opacity = "1";
  }

  function onmouseOut() {
    navi_bar.style.opacity = "0.5";
  }


  $(function() {
    $(".navigation__icon").click(function() {
      $(".navigation").toggleClass('navigation-open');
    });
  });

  $(function() {
    $(".navigation__ul").click(function() {
      $(".navigation").toggleClass('navigation-open');
    });
  });


  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
