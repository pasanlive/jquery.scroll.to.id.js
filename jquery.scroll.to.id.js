/**
 *  Scroll to any element by ID
 *
 * by: Pasan Buddhika Weerathunga
 *     me@pasanlive.com
 * Date: 5/5/13
 */

(function ($) {
    $.scrollToID = $.fn.scrollToID = function(id, gap){
        gap = !isNaN(Number(gap))? gap : 50;
        var x = $(id).offset().left + $(this).scrollLeft() - gap;
        var y = $(id).offset().top + $(this).scrollTop() - gap;

        if (!(this instanceof $)) return $.fn.scrollToID.apply($('html, body'), arguments);

        return $('body,html').stop().animate({
            scrollLeft: x,
            scrollTop: y
        });
    };
})(jQuery);
