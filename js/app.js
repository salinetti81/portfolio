
// Hidden email for formspree.io
var contactform =  document.getElementById('contactform');
contactform.setAttribute('action', '//formspree.io/' + 'dansalinetti' + '@' + 'gmail' + '.' + 'com');

//Google Analytics Script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83134149-1', 'auto');
ga('send', 'pageview');


$(document).ready(function() {

  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top -70},
        'slow');
  });

  $("#projects").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_3").offset().top -50},
        'slow');
  });

  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_4").offset().top -75},
        'slow');
  });

   // page scrolls down to section 2 when arrow is clicked in section 1
  $(".glyphicon-chevron-down").click(function() {
    $('html,body').animate({
      scrollTop: $("#navbar").offset().top -45},
        'slow');
    });

  //Scroll to top while page reloads
  $(".glyphicon-chevron-up").click(function() {
    $('html, body').animate({
      scrollTop: $("#section_2").offset().top -70},
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

// Angular //
var app = angular.module('Portfolio', []);

app.controller('PortfolioController', [function($scope,ngBody){ 
    
    this.displayContent = false;

    // click to reveal content
    var controller = this;
    this.showContent = function() {
      controller.displayContent = !controller.displayContent;
    }
}]);






