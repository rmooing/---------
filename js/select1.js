// 팝업 닫기 버튼
const closeBtn = document.querySelector(".close_btn");
const popUp = document.querySelector(".popup");

popUpClose = () => {
  popUp.classList.remove("popup");
  popUp.classList.add("hidden");
};

closeBtn.addEventListener("click", popUpClose);

$(document).ready(function () {
  var idx = "";
  var main = $(".banner").bxSlider({
    auto: true,
    autoControls: true,
    infiniteLoop: true,
    stopAutoOnClick: false,
    moveSlides: 1,
    maxSlides: 3,
    slideWidth: 432,
    controls: true,
    pager: false,
    nextSelector: ".right_btn",
    prevSelector: ".left_btn",
    nextText: '<i class="fa-solid fa-angle-right s1_right"></i>',
    prevText: '<i class="fa-solid fa-angle-left s1_left"></i>',
    touchEnabled: navigator.maxTouchPoints > 0,
    onSlideBefore: function (el, current) {
      idx = main.getCurrentSlide();
      var current_num = idx + 1;
      $(".counter .current").text(current_num);
    },
  });

  $(".best_list").bxSlider({
    moveSlides: 5,
    maxSlides: 5,
    slideWidth: 140,
    slideMargin: 24,
    infiniteLoop: true,
    pager: true,
    nextSelector: ".next_btn",
    prevSelector: ".prev_btn",
    nextText: '<i class="fa-solid fa-angle-right s1_right"></i>',
    prevText: '<i class="fa-solid fa-angle-left s1_left"></i>',
    touchEnabled: navigator.maxTouchPoints > 0,
  });
});
