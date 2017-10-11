$(function () {
  $('.js-btn-menu').on('click', function () {
    $('body').toggleClass('menu--show');
  });

  var header = document.querySelector('.header');

  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 1) {
      header.classList.add('header--color')
    } else  {
      header.classList.remove('header--color')
    }
  });
});


var currentYear = (new Date).getFullYear();
$(".js-get-current-year").text(currentYear);