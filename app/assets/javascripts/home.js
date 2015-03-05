$(document).ready( function() {
  $('.carousel').carousel({
    interval: 7000,
    pause: "false"
  });

  $(document).scroll(function() {
    if($('body').scrollTop() > 50) {
      $('#scroll-helper').fadeOut(500);
    }
  });
});
