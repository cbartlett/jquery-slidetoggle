(function($) {
  $.fn.slidetoggle = function(options) {

    var settings = $.extend({
        className:     'slidetoggle',
        checkedText:   'yes',
        uncheckedText: 'no'
      }, options || {})
      , eventName = settings.className + ':click'
      , $toggleTemplate = $('<div class="' +
          settings.className + '"><div></div><div></div></div>');

    function toggleText(checked) {
      return checked ? settings.checkedText : settings.uncheckedText
    }

    $(document).off(eventName).on(eventName, function(e) {
      var $toggle = $(e.target);
      $toggle.prev().attr('checked', function(i, attr) {
        $toggle.toggleClass('checked', attr)
          .find(':first-child').text(toggleText(!attr));
        return !attr;
      });
    });

    $(document).on('click', 'div.' + settings.className, function() {
      $(this).trigger(eventName);
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
            .toggleClass('checked', attr)
              .find(':first-child').text(toggleText(attr));
          return attr;
        })
        .after($toggle);
    });
  }
})(jQuery);
