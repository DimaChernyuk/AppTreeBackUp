function updateHeaderClassOnScroll() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos > 0) {
      $(".header").addClass("scrolled");
      $("#backToTopLink").fadeIn();
  } else {
      $(".header").removeClass("scrolled");
      $("#backToTopLink").fadeOut();
  }
}

function toggleBurger() {
  $(".header_burger").click(function(event) {
      $(".header_burger,.header_menu,.header_link").toggleClass("active");
      $("body").toggleClass("lock");
  });
 
}

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

$(window).on("scroll", updateHeaderClassOnScroll);

$(document).ready(function() {
  updateHeaderClassOnScroll();
  toggleBurger();

  $("#backToTopLink").click(function(event) {
    event.preventDefault(); 
    scrollToTop(); 
});
});

$( ".acordeon_title").click(function() {
  $(this).parent().find( ".acordeon_item" ).slideToggle( "slow");
  $(this).toggleClass("active");
});



function openTheme(evt, themeName) {
 
  var i, tabcontent, tablinks;

  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  
  document.getElementById(themeName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click(); 







