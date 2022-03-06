// Menu desplegable mobile

const btn_menu = document.querySelector('.btn_menu')
const menu_nav = document.querySelector('.menu_nav')

btn_menu.addEventListener('click',()=>{
    menu_nav.classList.toggle('active')
})

// Slide de review

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    speed:2000,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });