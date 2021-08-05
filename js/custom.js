jQuery(document).ready(function ($) {

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

  $('.partner-col a').click(function (event) {
    event.preventDefault();
  })

  $('.partner-col').click(function () {
    const info = $(this).find('.partner-info'),
      cardText = $(this).find('.partner-card .text'),
      allInfo = $('.partner-info'),
      allCardText = $('.partner-card .text');

    if ($(this).hasClass('active')) {
      return;
    }

    // closing all
    $('.partner-col').removeClass('active');
    allCardText.slideDown();
    allInfo.slideUp();
    $('.partner-col').css('order', '0');

    // opening present
    $(this).css('order', '-1');
    $(this).addClass('active');
    cardText.slideUp();
    info.slideDown();


    $("html, body")
      .stop()
      .animate({
          scrollTop: $('.section-partners').offset().top,
        },
        500
      );
  })

  if ($('body').hasClass('page-partners')) {
    $(".nav-list .has-submenu a").each(function () {
      let link = $(this).attr('href');
      link = link.split('#').pop();
      console.log(link);
      $(this).prop('href', '#' + link);
    });

    $(".nav-list .has-submenu a").bind("click", function (event) {
      var $anchor = $(this);

      if ($(".header")[0]) {
        topSpacer = $(".header").outerHeight() + 50;
      }

      $("html, body")
        .stop()
        .animate({
            scrollTop: $($anchor.attr("href")).offset().top - 20,
          },
          1000
        );

      event.preventDefault();
    });
  }

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