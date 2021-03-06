let sliderMain = document.querySelector(".features-slider");
let sliderMainControls = document.querySelector(".slider-controls");
let sliderMainButtons = document.querySelector(".slider-buttons");
let buttonNext = sliderMainControls.querySelector(".right-button");
let buttonPrev = sliderMainControls.querySelector(".left-button");
let item1 = sliderMain.querySelector(".features-slider li:first-child");
let item2 = sliderMain.querySelector(".features-slider li:last-child");
let radio1 = sliderMainButtons.querySelector("li:first-child");
let radio2 = sliderMainButtons.querySelector("li:last-child");

buttonNext.addEventListener("click", function(evt) {
  evt.preventDefault();
  item1.classList.toggle("slide-1");
  item2.classList.toggle("slide-2");
  radio1.classList.toggle("active");
  radio2.classList.toggle("active");
});

buttonPrev.addEventListener("click", function(evt) {
  evt.preventDefault();
  item2.classList.toggle("slide-2");
  item1.classList.toggle("slide-1");
  radio2.classList.toggle("active");
  radio1.classList.toggle("active");
});

radio1.addEventListener("click", function(evt) {
  evt.preventDefault();
  item2.classList.remove("slide-2");
  item1.classList.add("slide-1");
  radio2.classList.remove("active");
  radio1.classList.add("active");
});

radio2.addEventListener("click", function(evt) {
  evt.preventDefault();
  item1.classList.remove("slide-1");
  item2.classList.add("slide-2");
  radio1.classList.remove("active");
  radio2.classList.add("active");
});
