// Menu desplegable mobile

const btn_menu = document.querySelector('.btn_menu')
const menu_nav = document.querySelector('.menu_nav')

btn_menu.addEventListener('click',()=>{
    menu_nav.classList.toggle('active')
})


window.onscroll = () =>{
  menu_nav.classList.remove('active');
}

//Slide de review

    
  const swiper = new Swiper('.swiper', {
    // Default parameters
    // slidesPerView: 3,
    // spaceBetween: 30,
    // slidesPerGroup: 3,
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
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30
      }
    }
  })


