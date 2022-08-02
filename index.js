let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon')
let searchForm = document.querySelector('#search-form')
let closeBtn = document.querySelector('#close');
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')
}
searchIcon.onclick = () => {
searchForm.classList.toggle('active');
}
closeBtn.onclick = () => {
  searchForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
  delay: 7500,
  disableOnInteraction: false,
  },
  pagination: {
   el: ".swiper-pagination",
     clickable: true,
},
  loop:true,
  
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
  delay: 7500,
  disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
  0: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
},

});
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
setInterval(loader, 3000);
}
wimdow.onload = fadeOut;
