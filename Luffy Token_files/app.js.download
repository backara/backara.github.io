"use strict";

// scroll
function scroll() {
  // header
  const header = $('.js-header'),
        scrollTop = $(window).scrollTop();

  if (scrollTop > 2) {
    header.addClass('visible');
  } else {
    header.removeClass('visible');
  } // parallax


  const parallax = $('.js-parallax');

  if (parallax.length) {
    parallax.each(function () {
      let el = $(this),
          elTop = el.offset().top,
          elHeight = el.height(),
          elBottom = elTop + elHeight,
          speed = el.data('speed'),
          windowHeight = $(window).height(),
          scrollBottom = scrollTop + windowHeight;

      if (scrollBottom > elTop && elBottom > scrollTop) {
        let degrees = (scrollBottom - elTop) / (windowHeight + elHeight) * 10 * speed;
        el.css({
          'transform': 'rotate(' + degrees + 'deg)'
        });
      }
    });
  }
}

scroll();
$(window).scroll(function () {
  scroll();
}); // header

(function () {
  const header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrapper = header.find('.js-header-wrapper');
  burger.on('click', function () {
    burger.toggleClass('active');
    wrapper.toggleClass('visible');
    burger.hasClass('active') ? scrollLock.disablePageScroll() : scrollLock.enablePageScroll();
  });
})(); // scroll to


$(".js-scroll").on('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: $($(this).attr('href')).offset().top,
    behavior: "smooth"
  });
}); // faq

(function () {
  const item = $('.faq__item'),
        head = item.find('.faq__head'),
        body = item.find('.faq__body');
  head.on('click', function () {
    let thisHead = $(this);
    thisHead.parents('.faq__item').toggleClass('active');
    thisHead.parents('.faq__item').find('.faq__body').slideToggle();
  });
})(); // aos animation


AOS.init({
  once: true
}); // development scroll to drag

let wrapper = $(".development__wrapper");
let list = $(".development__list");
bindDragScroll(wrapper, list);