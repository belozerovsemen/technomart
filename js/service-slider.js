let serviceLinks = document.querySelectorAll(".service-controls a");
let serviceBlocks = document.querySelectorAll(".values-item");
let j, h, k;

for (i = 0; i < serviceLinks.length; ++i) {
  serviceLinks[i].addEventListener("click", function(event) {
    event.preventDefault(event);
    for (j = 0; j < serviceLinks.length; ++j) {
      serviceLinks[j].classList.remove("service-active");
    }
    for (h = 0; h < serviceLinks.length; ++h) {
      if (serviceLinks[h] == this) {
        serviceLinks[h].classList.add("service-active");
        for (k = 0; k < serviceBlocks.length; ++k) {
          serviceBlocks[k].classList.remove("values-active");
        }
        serviceBlocks[h].classList.add("values-active");
      }
    }
  })
}
