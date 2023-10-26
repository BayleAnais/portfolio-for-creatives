$(document).ready(function () {
  $(".experiment-image-1").click(function () {
    $(".experiment-image-2").fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});

$(document).ready(function () {
  $("#navigation-item-1").hover(
    function () {
      $(".overlay1").fadeIn(500);
    },
    function () {
      $(".overlay1").fadeOut(500);
    }
  );
  $("#navigation-item-2").hover(
    function () {
      $(".overlay2").fadeIn(500);
    },
    function () {
      $(".overlay2").fadeOut(500);
    }
  );
  $("#navigation-item-3").hover(
    function () {
      $(".overlay3").fadeIn(500);
    },
    function () {
      $(".overlay3").fadeOut(500);
    }
  );
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
