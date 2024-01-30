//SLIDER FUNCTIONS
let currentIndex = 0;
const slider = document.querySelector(".ot-slider");
// const mobileSlier = document.querySelector(".mobile-slider");

function showSlide(index) {
  currentIndex = index;
  const translateValue = -index * 33.33 + "%";
  // const mobileTranslateValue = -index * 100 + "%";
  slider.style.transform = `translateX(${translateValue})`;
  // mobileSlier.style.transform = `translateX(${mobileTranslateValue})`;
}

function nextSlide() {
  if (currentIndex < slider.children.length - 3) {
    showSlide(currentIndex + 1);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  }
}

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

var swiper = new Swiper(".slider-box", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
