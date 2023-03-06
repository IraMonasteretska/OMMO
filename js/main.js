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
  $('.testimonials__video').on('click', function() {
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

  // Перевірка стану форм при завантаженні сторінки
  $("form").each(function() {
    checkForm($(this));
  });

  // Перевірка стану форм при зміні будь-якого поля
  $("form :input").on("change keyup", function() {
    checkForm($(this).closest("form"));
  });

  function checkForm(form) {
    // Знаходимо всі поля форми з атрибутом required та radio
    var requiredFields = form.find(":input[required], :radio");
  
    // Перевіряємо кожне поле на заповненість
    var allFieldsFilled = true;
    requiredFields.each(function() {
      if ($(this).val() === "" || $(this).val() === $(this).attr("placeholder")) {
        allFieldsFilled = false;
        return false; // Перериваємо цикл each, якщо знайдено порожнє поле
      }
    });
  
    // Перевіряємо, чи вибрано всі radio
    var allRadioSelected = true;
    form.find(":radio").each(function() {
      var radioName = $(this).attr("name");
      if (form.find(":radio[name='" + radioName + "']:checked").length === 0) {
        allRadioSelected = false;
        return false; // Перериваємо цикл each, якщо знайдено невибраний radio
      }
    });
  
    // Активуємо/деактивуємо кнопку "Submit"
    if (allFieldsFilled && allRadioSelected) {
      form.find(":submit").prop("disabled", false);
    } else {
      form.find(":submit").prop("disabled", true);
    }
  }


  


});