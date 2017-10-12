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

// $.each($('.form__input'), function() {

// });

$('.form__input').focusin(function(){
  $(this).prev('.form__input-title').toggleClass('form__input-title--focused');
});

$('.form__input').focusout(function(){
  $(this).prev('.form__input-title').removeClass('form__input-title--focused');
});