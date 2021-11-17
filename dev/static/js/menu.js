var yourNavigation = $(".nav__list");
var stickyDiv = "sticky";
var yourHeader = $('.intro').height();
var moreSpace = $('.about').height();
var allSpace = yourHeader + moreSpace;

$(window).scroll(function() {
    if ($(this).scrollTop() > yourHeader) {
        yourNavigation.addClass(stickyDiv);
    }

    else {
        yourNavigation.removeClass(stickyDiv);
    }

    if ($(this).scrollTop() >= allSpace) {
        yourNavigation.removeClass(stickyDiv)
    }
});
