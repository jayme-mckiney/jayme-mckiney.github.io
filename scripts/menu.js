$(document).ready( function() {
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    var position = parseInt($("header").css('font-size')) * 6.5;
    if(height  > position) {
      $('nav').addClass('fixednav');
    } else {
      $('nav').removeClass('fixednav');
    }
  });
  $.ajax({
  url: "http://jayme-mckiney.github.io/nav_menu.html",
  cache: false
}).done(function( html ) {
  $('nav').html(html);
  $('.menu').hover(function() {
    var subMenu = $(this).find('> ul');
    if ($(this).find('> a').hasClass('collapsed')) {
      subMenu.fadeIn();
    } else {
      subMenu.fadeOut();
    }
    $(this).find('> a').toggleClass('collapsed').toggleClass('expanded');
  });
});



});
