$(document).ready( function() {
    $.ajax({
    url: "http://jayme-mckiney.github.io/nav_menu.html",
    cache: false
  }).done(function( html ) {
      var array = html.split('<br>');

      $( ".menu" ).each( function(index) {
        $(this).append(array[index]);
      });
    });

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
