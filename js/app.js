
// Hidden email for formspree.io
var contactform =  document.getElementById('contactform');
contactform.setAttribute('action', '//formspree.io/' + 'dansalinetti' + '@' + 'gmail' + '.' + 'com');


$(document).ready(function() {

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top -45},
        'slow');
  });

  $("#projects").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_3").offset().top -50},
        'slow');
  });

  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_4").offset().top -90},
        'slow');
  });

   // page scrolls down to section 2 when arrow is clicked in section 1
  $(".glyphicon-chevron-down").click(function() {
    $('html,body').animate({
      scrollTop: $("#navbar").offset().top},
        'slow');
    });

  //Scroll to top while page reloads
  $(".glyphicon-chevron-up").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_1").offset().top -50},
      'slow');
  });

  // fixed navbar 
  (function($) {
    var $navbar = $("#navbar"),
      y_pos = $navbar.offset().top,
      height = $navbar.height();

    $(document).scroll(function() {
      $('#hidden_nav').toggle($(this).scrollTop()>500)
      var scrollTop = $(this).scrollTop();
        if (scrollTop >  height) {
          $navbar.addClass("navbar-fixed").animate({
              top: 0
          });
        } else if (scrollTop <= y_pos) {
          $navbar.removeClass("navbar-fixed").clearQueue().animate({
              top: "0"
          }, 0);
        }
    });
  })(jQuery);

  // hamburger menu
$( ".cross_list" ).hide();  
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
$( ".cross_list" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$( ".cross_list" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$("#about_mobile").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top -45},
        'slow');
  });

$("#projects_mobile").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_3").offset().top -50},
        'slow');
  });

  $("#contact_mobile").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_4").offset().top -50},
        'slow');
  });


});//ends document.ready






