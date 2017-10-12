$(function () {
  $('.js-btn-menu').on('click', function () {
    $('body').toggleClass('menu--show');
  });

  var header = document.querySelector('.header');

  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 1) {
      header.classList.add('header--color')
    } else {
      header.classList.remove('header--color')
    }
  });

  $('.js-partners-slider').slick({
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 1500,
    rows: 2,
    responsive: [{

      breakpoint: 1199,
      settings: {
        slidesToShow: 5
      }

    }, {

      breakpoint: 959,
      settings: {
        slidesToShow: 4
      }

    },
    {
      breakpoint: 659,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 2
      }
    }]
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