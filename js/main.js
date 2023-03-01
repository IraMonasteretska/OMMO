$(function () {

  //  SUBMENU ------------------------------------ //
  $('.submenu__col-item').on('click', function () {
    $(this).toggleClass('active');
    $(this).children('ul').slideToggle();
  });

  //  BURGER MENU -------------------------------- //
  $('.burger-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

    //  MENU MOBILE ------------------------------------ //
    $('.mobile__menu .submenu').children('a').on('click', function () {
      $(this).parent().children('.dropdown').slideToggle();
    });

  // TESTIMONIALS PADDING --------------------------- //
  var windowWidth = $(document).width(),
    containerWidth = $('.container').width(),
    paddingContainer = ((windowWidth - containerWidth) / 2)
  $('.testimonials').css('padding-left', paddingContainer);

  $(window).resize(function () {
    var windowWidth = $(document).width(),
      containerWidth = $('.container').width(),
      paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.testimonials').css('padding-left', paddingContainer);
  });

  // TESTIMONIALS SLIDER --------------------------- //
  var swiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },

      1199: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },

    },
  });

  // AOS AIMATE -------------------------------------- //
  AOS.init({
    disable: 'mobile',
    duration: 1000,
    once: true,
    easing: 'ease'
  });
});
