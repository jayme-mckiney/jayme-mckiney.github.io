$(document).ready( function() {
    $.ajax({
    url: "nav_menu.html",
    cache: false
  }).done(function( html ) {
      array = html.split('<br>');

      var menus = $( ".menu" );
      menus[0].append( array[0] );
      menus[1].append( array[1]);
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
