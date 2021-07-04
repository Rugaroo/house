const header = document.querySelector('.wide-container');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.burger-overlay');
const navLink = document.querySelector('.nav-link');

const burgerMenu = function () {
  nav.classList.toggle('burger-nav');
  hamburger.classList.toggle('is-active');
  overlay.classList.toggle('overlay-visible');
  document.body.classList.toggle('lock');
}
const removeBurgerMenu = function () {
  nav.classList.remove('burger-nav');
  hamburger.classList.remove('is-active');
  overlay.classList.remove('overlay-visible');
  document.body.classList.remove('lock');
}
document.querySelector('.burger').addEventListener('click', burgerMenu);
document.querySelector('.burger-overlay').addEventListener('click', burgerMenu);
document.querySelector('.nav-link').addEventListener('click', burgerMenu);

$('.responsive').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});