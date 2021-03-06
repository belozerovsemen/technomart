let productsList = document.querySelector(".products-list");
if (productsList) {
  let productBuyInform = function() {
    let elements = productsList.querySelectorAll(".products-item");
    let cartModal = document.querySelector(".cart-modal");

    if (cartModal) {
      let closeCartModal = cartModal.querySelector(".cart-close");
      let cancelCartModal = cartModal.querySelector(".cancel-button");

      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let child = element.querySelector(".buy-link");

        child.addEventListener("click", function(evt) {
          evt.preventDefault();
          cartModal.classList.add("modal-show");
        });
      }

      closeCartModal.addEventListener("click", function(evt) {
        evt.preventDefault();
        cartModal.classList.remove("modal-show");
      });

      cancelCartModal.addEventListener("click", function(evt) {
        evt.preventDefault();
        cartModal.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          cartModal.classList.remove("modal-show");
        }
      });
    }
  };
  productBuyInform();
}
