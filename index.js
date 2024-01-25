// let menu = document.querySelector("#menu-btn");
// let navbar = document.querySelector(".header .navbar");
// let header = document.querySelector(".header");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");

//   if (window.scrollY > 0) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };

let currentIndex = 0;
const slider = document.querySelector(".ot-slider");

function showSlide(index) {
  currentIndex = index;
  const translateValue = -index * 33.33 + "%";
  slider.style.transform = `translateX(${translateValue})`;
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

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("show");
}
