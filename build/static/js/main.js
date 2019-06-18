
$(document).ready(function() {
  // Animation for btn gamburger in TOP HEADER
  var link = $('.header-top_menu-btn');
  var link_active = $('.header-top_menu-btn_active');
  // переменная для выдвигающегося слева меню при нажатии на гнопку гамбургера
  var menu = $('.header-top__list');

  link.click(function() {
    // кнопке гамбургера присвается класс с анимацией смены полосок на крестик
    link.toggleClass('header-top_menu-btn_active');
    // при нажатиина кнопку меню - появляется меню
    menu.toggleClass('header-top__list_active');
  });
  link_active.click(function() {
    link.removeClass('header-top_menu-btn_active');
  });

// carousel bootstrp
  $('.carousel').carousel({
    interval: 10000
  })



});
