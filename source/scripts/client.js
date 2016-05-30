$('.b-slider').addClass('owl-carousel').owlCarousel({
   items: 4,
   navText: ['',''],
   loop: true,
   nav: true
});

jQuery(function($){
    var doc = $(document);
    var win = $(window);
    function makeLine(){
        doc.find('.test').find('.left,.right').width(function(){
            return ( $(this).parent().width()-$(this).parent().find('h2').outerWidth() ) / 2;
        });
    }
    win.load(function(){
        makeLine();
    });
    win.resize(function(){
        makeLine();
    });
});

$.fn.imPopup = function() {
  var $this, id;
  $this = this;
  id = '';
  $this.on('click', function(e) {
    e.preventDefault();
    id = $(this).data('id');
    if ($(id).length) {
      var offset = window.innerWidth - $(window).width();
    };
    return $(".im-popups " + id).addClass('_visible');
  });
  $('.im-popup .b-popup__close').click(function(e) {
    return e.preventDefault();
  });
  return $('.im-popup').on('click', function(e) {
    if (!$(e.target).hasClass('im-popup-inside') && !$(e.target).parents('.im-popup-inside').length || $(e.target).hasClass('b-popup__close')) {
      var id = '#'+$(this).attr('id');
      if ($('.im-popup._visible').length == 1) {
        setTimeout(function() {
          $('body').css({
            overflow: '',
            paddingRight: ''
          });
        }, 300);
      }
      return $(".im-popups " + id).removeClass('_visible');
    }
  });
};

$('.im-popup-link').imPopup();