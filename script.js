/*Слайдер*/

let navMenu = document.getElementById("navMenu");
let mobileOpenBtn = document.getElementById("mobileOpenBtn");
let mobileCloseBtn = document.getElementById("mobileCloseBtn");
let headerBottom = document.querySelector(".header__bottom");

function openMenu() {
  navMenu.style.display = "block";
  mobileCloseBtn.style.display = "block";
  mobileOpenBtn.style.display = "none";
}
function closeMenu() {
  navMenu.style.display = "none";
  mobileCloseBtn.style.display = "none";
  mobileOpenBtn.style.display = "block";
}

let slides = document.querySelectorAll("#slides .slide");
let currSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currSlide + 1);
}
function prevSlide() {
  goToSlide(currSlide - 1);
}

function goToSlide(n) {
  slides[currSlide].className = "slide";
  currSlide = (n + slides.length) % slides.length;
  slides[currSlide].className = "slide showing";
}

let next = document.getElementById("next");
let previous = document.getElementById("previous");

/*next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  prevSlide();
};*/
