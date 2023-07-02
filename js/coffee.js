$(function () {

  $('.main_slide').slick({
    dots: true,
    arrows: false,

  });



  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
  })


  $('.tap_box .top_tap li').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.tap_box .bottom_tap li').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
  });


  $('.language').on('click', function () {
    $(this).toggleClass('on');
    $(this).next().toggleClass('on');
  })





})