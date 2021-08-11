jQuery(document).ready(function ($) {

  //smooth scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);

    $("html, body")
      .stop()
      .animate({
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        1000
      );

    event.preventDefault();
  });

  $('.bloghp-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  function navToggle() {
    $('.nav-toggle,.nav-bg').click(function () {
      const headerBot = $('.header-bot');
      if (headerBot.hasClass('active')) {
        headerBot.removeClass('active');
        $('.nav-bg').remove();
      } else {
        headerBot.addClass('active');
        $('.header').append('<div class="nav-bg"></div>')
      }
    });
  }
  navToggle();

  function navDropdown() {
    if ($(window).width() < 991) {
      $('.has-submenu').click(function () {
        if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).find('ul').slideUp();
        } else {
          $(this).addClass('open');
          $(this).find('ul').slideDown();
        }
      });

      $(document).mouseup(function (e) {
        if ($('.header-bot').hasClass('active')) {
          var container = $('.header-bot');

          if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
            $('.nav-bg').remove();
          }
        }
      });
    }
  }

  navDropdown();

  function headerSticky() {

    const body = $('body'),
      header = $('.header'),
      headerHeight = header.outerHeight(),
      headerBot = header.find('.header-bot'),
      headerBotHeight = headerBot.outerHeight();

    let windowRes = true;
    if ($(window).width() > 991) {
      windowRes = false;
    }

    $(window).scroll(function () {
      if (windowRes) {
        if ($(window).scrollTop() > (headerHeight * 3)) {
          body.css({
            'paddingTop': headerHeight
          });
          header.addClass('header-fixed');
        } else {
          body.css({
            'paddingTop': ''
          });
          header.removeClass('header-fixed');
        }
      } else {
        if ($(window).scrollTop() > (headerHeight * 3)) {
          body.css({
            'paddingTop': headerBotHeight
          });
          header.addClass('header-fixed');
        } else {
          body.css({
            'paddingTop': ''
          });
          header.removeClass('header-fixed');
        }
      }
    });
  }

  headerSticky();
  $(window).resize(function () {
    headerSticky();
  })
});