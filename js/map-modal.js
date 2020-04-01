let mapLink = document.querySelector(".map-preview");
let mapPopup = document.querySelector(".map-modal");
let mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
/*window.addEventListener("keydown", function (evt) {
 evt.preventDefault();
 if (evt.keyCode === 27) {
 if (mapPopup.classList.contains("modal-show")) {
  mapPopup.classList.remove("modal-show");
}
}
});*/
