function toggleHamBurger(x) {
  x.classList.toggle("change");
  console.log("add");
}
function show(x) {
  var y = document.getElementsByClassName("menu");
  y[x].className += " menu-enable";
  var c = document.getElementById("cross");
  c.className += " enable-cross";
}
function hide() {
  var y = document.getElementsByClassName("menu");
  for (var i = 0; i < y.length; i++) {
    y[i].classList.remove("menu-enable");
  }
  var c = document.getElementById("cross");
  c.className -= " enable-cross";
}
var myNav = document.getElementById("navbar");
window.onscroll = function () {
  "use strict";

  if (
    document.body.scrollTop >= 300 ||
    document.documentElement.scrollTop >= 300
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
AOS.init();
