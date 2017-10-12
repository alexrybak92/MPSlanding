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