(function($) {
  $.fn.slidetoggle = function(options) {
    options = options || {};

    var className = options.className || 'slidetoggle'
      , checkedText = options.checkedText || 'yes'
      , uncheckedText = options.uncheckedText || 'no'
      , $toggleTemplate = $('<div class="' + className + '"><span></span><div></div></div>');

    function toggleText(checked) {
      return checked ? checkedText : uncheckedText
    }

    $(document).on('click', 'div.' + className, function() {
      var $toggle = $(this);
      $toggle.prev().attr('checked', function(i, attr) {
        $toggle.toggleClass('checked', attr).find('span').text(toggleText(!attr));
        return !attr;
      });
    });

    return this.each(function() {
      var $toggle = $toggleTemplate.clone();
      $(this).hide()
        .attr('checked', function(i, attr) {
          attr = attr || false;
          $toggle.toggleClass('checked', attr).find('span').text(toggleText(attr));
          return attr;
        })
        .after($toggle);
    });
  }
})(jQuery);
