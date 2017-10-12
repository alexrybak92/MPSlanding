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



var formInput = $('.form__input');

formInput.focusin(function(){
  $(this).addClass('form__input--focused');
  $(this).prev('.form__input-title').addClass('form__input-title--focused');
});

formInput.focusout(function(){
  if ($(this).val() == 0) {
    $(this).removeClass('form__input--focused');
    $(this).prev('.form__input-title').removeClass('form__input-title--focused');
  };
});