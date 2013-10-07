# jQuery Slidetoggle

Unobtrusive jQuery plugin that converts checkboxes to slide toggles.

    $('input:checkbox').slidetoggle();

### Options/Defaults:
    {
        className: 'slidetoggle',
        checkedText: 'yes',
        uncheckedText: 'no'
    }

### Notes:

IE < 9 requires a compatible jQuery (< 2) version and a 'quirksmode' DOCTYPE to render inline-block elements properly.
