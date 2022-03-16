$(function(){

  $('.product-recent__star').rateYo({
    starWidth: '11px',
    ratedFill: '#ffc000',
    normalFill: '#d6d6d6',
    spacing: "8px",
    starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>'
  });

  $('.star').rateYo({
    starWidth: '18px',
    ratedFill: '#ffc000',
    normalFill: '#d6d6d6',
    spacing: "12px",
    starSvg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path></svg>'
  });

  $('.product-price__input').ionRangeSlider({
    onStart: function (data){
      $('.product-price__from').text(data.from),
      $('.product-price__to').text(data.to)
    },
    onChange: function (data){
      $('.product-price__from').text(data.from),
      $('.product-price__to').text(data.to)
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});