$(document).ready(function() {
  
  function toggle_navbar() {
    var $navbar = $('.navigation');
    $navbar.toggleClass('navigation--active');
  }
  
  $('.navbar__hamburger').click(toggle_navbar);
  
  $('.experts__carousel').owlCarousel({
    itemsDesktop: [1400, 3],
    itemsTablet: [1024, 2],
    itemsMobile: [768, 1]
  });
});