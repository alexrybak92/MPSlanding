$(function() {

  $('.js-btn-menu').on('click', function () {
    $('body').toggleClass('menu--show');
  });


  var header = $('.header');
  $(window).on('load scroll', function () {
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


  //technical expertise
  $('.js-issues').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: 'issue__dots',
    infinite: true,
    mobileFirst: true,
    speed: 0,
    fade: true,
    cssEase: 'linear'
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

  // our team
  $('.js-team-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-team-preview',
    lazyLoad: 'ondemand'
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
    lazyLoad: 'ondemand',
    responsive: [{
      breakpoint: 660,
      settings: {
        slidesToShow: 4
      }
    }]
  });



  (function() {
    Snap.plugin( function( Snap, Element, Paper, global ) {

      Element.prototype.drawAtPath = function( path, timer, options) {

        var myObject = this, bbox = this.getBBox(1);
        var point, movePoint = {}, len = path.getTotalLength(), from = 0, to = len, drawpath = 0, easing = mina.linear, callback;
        var startingTransform = '';

        if( options ) {
          easing = options.easing || easing;
          if( options.reverse  ) { from = len; to = 0; };
          if( options.drawpath ) {
            drawpath = 1;
            path.attr({
              fill: "none",
              strokeDasharray: len + " " + len,
              strokeDashoffset: this.len
            });

          };
          if( options.startingTransform ) {
            startingTransform = options.startingTransform;
          };
          callback = options.callback || function() {};
        };

        Snap.animate(from, to , function( val ) {
          point = path.getPointAtLength( val );
          movePoint.x = point.x - bbox.cx; movePoint.y = point.y - bbox.cy;
          myObject.transform( startingTransform + 't' + movePoint.x + ',' + movePoint.y + 'r' + point.alpha);

          if( drawpath ) {
            path.attr({ "stroke-dashoffset": len - val });
          };
        }, timer, easing, callback );
      };
    });
  })();

  var s = Snap("#svgC");
  var path = s
  .path("M1.5,153.81s184.05-83.34,326.08-50.37S570,16.35,574.37,1.5")
  .attr({
    fill: "none",
    strokeWidth: "1",
    stroke: "#4c8cf5"
  });
  animatePath();

  function animatePath() {
    path.animate({
      d:
      "m 1.5,153.81 c 0,0 204.63779,34.36771 326.08,-46.32511 C 437.25088,34.613589 570,16.35 574.37,1.5"
    },
      5000,
      mina.linear,
      resetPath
    );
  };

  function resetPath() {
    path.animate({
      d: "M1.5,153.81s184.05-83.34,326.08-50.37S570,16.35,574.37,1.5"
    },
      5000,
      mina.linear,
      animatePath
    );
  };

  function drawcircle(el) {
    el.drawAtPath(path, 15000, { callback: drawcircle.bind(null, el) });
  };

  var circle = s.circle("0", "0", 20).attr({
    fill: "#fff",
    opacity: 0,
    stroke: "#4c8cf5",
    strokeWidth: "1"
  });

  var ImgLink = [];

  $.getJSON("../assets/technologiesLogo.json", function(json) {
    for (key in json) {
      ImgLink.push(json[key]);
    }
    return ImgLink;
  });

  function renderingCircle() {
    ImgLink.forEach(function(e, i) {
      setTimeout(function() {
        drawcircle(createElement(e));
      }, i * 2500);
    })
  };


  $(window).on('load', function() {
    renderingCircle();
  });




  function createElement(imgURL) {
    var img = s.image(imgURL, "0", "0", "25", "25").attr({
      transform: "translate(-12.5, -12.5) rotate(180deg)"
    });
    img.node.removeAttribute('preserveAspectRatio');
    var group = s.g(circle.clone().attr({opacity: 1}), img).attr({transform: 'scale(0)'});
    group.animate({
      opacity: "1"
    }, 500, mina.linear)
    return group;
  }


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


