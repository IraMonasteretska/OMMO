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
  $('.testimonials__bottom').css('padding-left', paddingContainer);

  $(window).resize(function () {
    var windowWidth = $(document).width(),
      containerWidth = $('.container').width(),
      paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.testimonials__bottom').css('padding-left', paddingContainer);
  });

  // TESTIMONIALS SLIDER --------------------------- //
  var swiper = new Swiper(".testimonials__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {

      375: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },

      800: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },

    },
  });

  $('.video-play').on('click', function() {
    $(this).hide();
    $('.video-poster').hide();
  })



  // POPUP ---------------------------------------------- //

  $('.popup_btn').on('click', function () {
    var indexPopup = $(this).attr('data-popup');
    $('.popup__window').addClass('hide');
    $('.' + indexPopup).removeClass('hide');
    return false;
});

  $('.popup__close').on('click', function() {
    $('.popup__window').addClass('hide');
  });

  $('.popup__form').find('input').each( function() {
    if($(this).text == '') {
      console.log('good');
    }
  });

  // AOS AIMATE -------------------------------------- //
  AOS.init({
    disable: 'mobile',
    duration: 1000,
    once: true,
    easing: 'ease'
  });
});