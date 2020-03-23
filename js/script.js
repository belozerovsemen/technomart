let writeLink = document.querySelector(".write-link");
let popup = document.querySelector(".write-us-modal");
let close = popup.querySelector(".modal-close");
let login = popup.querySelector("[name=write-us-name]");
let email = popup.querySelector("[name=write-us-email]");
let form = popup.querySelector("form");
let isStorageSupport = true;
let storage = "";

try{
  storage = localStorage.getItem("login");
} catch (err){
  isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
    if(storage){
      login.value = storage;
      email.focus();
    }else{
      login.focus();
    }
});
close.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
})
form.addEventListener("submit", function (evt){
  if (!login.value || !email.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Введите Ваше имя и почту");
  }else{
    if (isStorageSupport){
    localStorage.setItem("login", login.value);
  }
  }
  });
  window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
      evt.preventDefault();
      if (popup.classList.contains("modal-show")){
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

  let mapLink = document.querySelector(".map-preview");
  let mapPopup = document.querySelector(".map-modal");
  let mapClose = mapPopup.querySelector(".map-close");

  mapLink.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
  mapClose.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function (evt) {
   evt.preventDefault();
   if (evt.keyCode === 27) {
   if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
  }
});

  let buyLink = document.querySelector(".buy-link");
  let cartModal = document.querySelector(".cart-modal");
  let cartClose = cartModal.querySelector(".cart-close");
  let cartCancel = cartModal.querySelector(".cancel-button");

  for (let i = 0; i < buyLink.length; ++i) {
  buyLink[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.add("modal-show");
 })
}

  cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
});

  cartCancel.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
});

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
     if (cartModal.classList.contains("modal-show")) {
         cartModal.classList.remove("modal-show");
     }
 }
});

  /*let buyLink = document.querySelector(".buy-link");
  let cartModal = document.querySelector(".cart-modal");
  let cartClose = cartModal.querySelector(".cart-close");

  console.log("dfgdfdf", buyLink);
  buyLink.addEventListener("click", function (evt){
    evt.preventDefault();
    cartModal.classList.add("modal-show");
  });
  cartClose.addEventListener("click", function (evt){
    evt.preventDefault();
    cartModal.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function (evt) {
   evt.preventDefault();
   if (evt.keyCode === 27) {
   if (cartModal.classList.contains("modal-show")) {
    cartModal.classList.remove("modal-show");
  }
  }
});*/
