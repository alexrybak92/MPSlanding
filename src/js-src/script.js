$(function() {

  $('.js-btn-menu').on('click', function () {
    $('body').toggleClass('menu--show');
  });


  var header = $('.header');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header--color');
    } else {
      header.removeClass('header--color');
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


  //scroll to section
  $('.js-scrollto').click(function () {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({
    scrollTop: destination}, 800);
    $('body').removeClass('menu--show');
    return false;
  });


  //menu-item-selecting-on-scroll
  var lastId,
    topMenu = $(".js-menu"),
    topMenuHeight = topMenu.outerHeight(),
    menuItems = $('.js-scrollto'),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    menuItems.click(function(e){
      var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({scrollTop: offsetTop}, 300);
      e.preventDefault();
    });

  $(window).scroll(function() {
    // menu-item-selecting-onscroll
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
      .removeClass("menu__link--active")
      .filter('[href="#'+id+'"]').addClass("menu__link--active");
    }
  });


//cur date
  var currentYear = (new Date).getFullYear();
  $(".js-get-current-year").text(currentYear);


  //forms
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
});
$('.js-team-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.js-team-preview'

});
$('.js-team-preview').slick({
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: 0,
  asNavFor: '.js-team-main',
  centerMode: true,
  focusOnSelect: true,
  appendArrows: $('.team__arrows'),
  arrow: true,
  prevArrow: $('.team__arrow--prev'),
  nextArrow: $('.team__arrow--next'),
  initialSlide: 1,
  responsive: [{
    breakpoint: 660,
    settings: {
      slidesToShow: 4
    }
  }]

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

