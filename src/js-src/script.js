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

$('.js-works').slick({
  mobileFirst: true,
  centerPadding: 0,
  arrows: false,
  rows: 2,
  slidesToShow: 2,
  responsive: [
    {
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
    }]
});

var currentYear = (new Date).getFullYear();
$(".js-get-current-year").text(currentYear);



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


//map
var map;
function initMap() {
  var milan = {lat: 45.466982, lng: 9.186651},
  berlin = {lat: 52.518044, lng: 13.406187},
  nurnberg = {lat: 49.453867, lng: 11.081532},
  chicago = {lat: 41.875331, lng: -87.622133},
  santaMonica = {lat: 34.018558, lng: -118.486056},
  kiev = {lat: 50.448069, lng: 30.523050};
  map = new google.maps.Map(document.getElementById('map'), {
    center: milan,
    scrollwheel: false,
    disableDefaultUI: false,
    zoom: 3,
    styles:
    [
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3e3e3e"
          },
          {
            "saturation": -100
          },
          {
            "lightness": -20
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#efefef"
          },
          {
            "lightness": 30
          },
          {
            "visibility": "on"
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cccccc"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cccccc"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#7b7b7b"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#f4f5f9"
          }
        ]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: berlin,
    map: map,
    icon: 'img/marker.png'
  });
  var marker2 = new google.maps.Marker({
    position: milan,
    map: map,
    icon: 'img/marker.png'
  });
  var marker3 = new google.maps.Marker({
    position: nurnberg,
    map: map,
    icon: 'img/marker.png'
  });
  var marker4 = new google.maps.Marker({
    position: chicago,
    map: map,
    icon: 'img/marker.png'
  });
  var marker4 = new google.maps.Marker({
    position: santaMonica,
    map: map,
    icon: 'img/marker.png'
  });
  var marker4 = new google.maps.Marker({
    position: kiev,
    map: map,
    icon: 'img/marker.png'
  });
};