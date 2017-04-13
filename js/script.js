$(document).ready(function () {
  var scrolltop = $('#scrolltop');

  //Init show return to top arrow on refresh
  showScrolltop()

  //Init show return to top arrow on scroll
  $(document).on('scroll', function () {
  setTimeout(showScrolltop, 300);
  });
  //Scroll to top after click of return to top arrow
  scrolltop.on('click', function (event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 600);
  });

  // Shows scroll top arrow
  function showScrolltop () {
    var scrollPosition = $(document).scrollTop();
    if (scrollPosition > 50) {
      scrolltop.fadeIn(300);
    }
    else {
      scrolltop.fadeOut(300);
    }
  }
});
