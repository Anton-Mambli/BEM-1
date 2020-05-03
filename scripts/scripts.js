$(".wrapper").addClass("loaded");
$(".icon-menu").click(function (e) {
  $(this).toggleClass("active");
  $(".menu__body").toggleClass("active");
  $("body").toggleClass("lock");
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});