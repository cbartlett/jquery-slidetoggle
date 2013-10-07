(function($) {
  $.fn.slidetoggle = function(options) {
    options = options || {};

    var className = options.className || 'slidetoggle'
      , checkedText = options.checkedText || 'yes'
      , uncheckedText = options.uncheckedText || 'no'
      , $toggleTemplate = $('<div><div></div><div></div></div>').addClass(className);

    function toggleText(checked) {
      return checked ? checkedText : uncheckedText
    }

    $(document).on('click', 'div.' + className, function() {
      var $toggle = $(this);
      $toggle.prev().attr('checked', function(i, attr) {
        $toggle.toggleClass('checked', attr).find(':first-child').text(toggleText(!attr));
        return !attr;
      });
    });

    $(document).on('click', 'label', function() {
      $('div[for=' + $(this).attr('for') + ']').click();
    });

    return this.each(function() {
      var $checkbox = $(this)
        , $toggle = $toggleTemplate.clone();

      $checkbox.hide()
        .attr('checked', function(i, attr) {
          attr = attr || false;
          $toggle.attr('for', $checkbox.attr('id'))
            .toggleClass('checked', attr).find(':first-child').text(toggleText(attr));
          return attr;
        })
        .after($toggle);
    });
  }
})(jQuery);
