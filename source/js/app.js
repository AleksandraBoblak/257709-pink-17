var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var logoBg = document.querySelector('.page-header__logo');
var headerBg = document.querySelector('.page-header');
var bgHigher = document.querySelector('.page-title');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    logoBg.classList.add('page-header__logo--opaque');
    headerBg.classList.add('page-header--opaque');
    bgHigher.classList.add('page-title--higher');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    logoBg.classList.remove('page-header__logo--opaque');
    headerBg.classList.remove('page-header--opaque');
    bgHigher.classList.remove('page-title--higher');
  }
});
