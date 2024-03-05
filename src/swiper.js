let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);



// let hideSlide = document.querySelector('.swiper-slide:nth-child(5)')

// function hide() { 
// if (window.innerWidth <= 768 ) {
//   hideSlide.classList.add('hidden');
//   }
// }
// hide();
