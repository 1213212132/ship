$(function () {

  $('.main_slide').slick({
    dots: true,
    arrows: false,

  });



  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
  })



  var swiper = new Swiper(".swiper", {

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });


})