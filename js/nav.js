/* When the user scrolls the page, execute myFunction*/
window.onscroll = function() {myFunction()};

/* Get the navbar*/
var site-nav = document.getElementById("site-nav");

/* Get the offset position of the navbar*/
var sticky = site-nav.offsetTop;

/* Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position*/
function myFunction() {
  if (window.pageYOffset >= sticky) {
    site-nav.classList.add("sticky")
  } else {
    site-nav.classList.remove("sticky");
  }
}