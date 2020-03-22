$(document).ready(function () {

    // Search Box
    $('#search a').click(function () {
        $('.search-box').toggleClass('show');
        return false;
    });

    // Mobile Menu
    $('#mobileNav').click(function () {
        $('.menu-area').toggleClass('show');
        return false;
    });
    $('#mobileNavClose').click(function () {
        $('.menu-area').removeClass('show');
        return false;
    });

    // Select all »a« elements with a parent class »links« and add a function that is executed on click
    $('.myNav li a').on('click', function (e) {
        // Define variable of the clicked »a« element (»this«) and get its href value.
        var href = $(this).attr('href');
        // Run a scroll animation to the position of the element which has the same id like the href value.
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');

        // Prevent the browser from showing the attribute name of the clicked link in the address bar
        e.preventDefault();

    });

    // Fixed Header
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('.header-area').addClass('fixed-header');
        }
        else {
            $('.header-area').removeClass('fixed-header');
        }
    });

})