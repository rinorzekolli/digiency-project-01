//SLIDER FUNCTIONS
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   cssMode: true,
//   navigation: {
//     nextEl: ".next-btn",
//     prevEl: ".prev-btn",
//   },
//   mousewheel: true,
//   keyboard: true,
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//     },
//     1008: {
//       slidesPerView: 3,
//     },
//   },
// });

//MENU BUTTON
const headerMenu = document.querySelector(".header__menu"),
  menuBtn = document.querySelector(".menu-btn"),
  headerMenuItems = document.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
  });
});
