$(function() {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });
  // var mixer = mixitup('.product__items');
  // var mixer1 = mixitup('.product-design__items');
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  var mixer1 = mixitup(containerEl1);
  var mixer2 = mixitup(containerEl2);
});
  
