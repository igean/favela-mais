try {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".menu").style.bottom = "0";
    } else {
      document.querySelector(".menu").style.bottom = "-100%";
    }
    prevScrollpos = currentScrollPos;
  };
} catch {
  console.log("");
}