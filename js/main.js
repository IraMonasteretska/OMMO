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

    // VIDEO ---------------------------------------------- //
  $('.video').on('click', function() {
    $(this).find($('.video-play')).hide();
    $(this).find($('.video-poster')).hide();
  });


  // POPUP ---------------------------------------------- //

  $('.popup_btn').on('click', function () {
    var indexPopup = $(this).attr('data-popup');
    $('.popup__window').removeClass('active');
    $('.' + indexPopup).addClass('active');
    return false;
});

  $('.popup__close').on('click', function() {
    $('.popup__window').removeClass('active');
  });


//  CHECK FORM ---------------------------------------- //

  // Перевірка стану форми при завантаженні сторінки
  checkForm();

  // Перевірка стану форми при зміні будь-якого поля
  $("form :input").change(function() {
    checkForm();
  });

function checkForm() {
  var anyFieldSelected = false;
  // Ітеруємося по всіх полях форми і перевіряємо, чи є хоча б одне вибране поле
  $("form :input").not("input[type='text'][placeholder], input[type='password'][placeholder]").each(function() {
    if ($(this).prop('checked') && $(this).val() !== '') {
      anyFieldSelected = true;
    }
  });
  // Якщо є вибране поле, активуємо кнопку, інакше - деактивуємо
  if (anyFieldSelected) {
    $(".form-btn").prop('disabled', false);
    console.log('не пусте поле');
  } else {
    $(".form-btn").prop('disabled', true);
    console.log('пусте поле');
  }
}
  




  // AOS AIMATE -------------------------------------- //
  // AOS.init({
  //   disable: 'mobile',
  //   duration: 1000,
  //   once: true,
  //   easing: 'ease'
  // });
});