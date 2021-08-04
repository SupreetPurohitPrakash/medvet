jQuery(document).ready(function ($) {

  $('.bloghp-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3
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

});