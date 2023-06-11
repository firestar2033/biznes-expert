$(function() {


    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    function toggleMenu() {
        nav.toggleClass("show");
        header.toggleClass("nav__show");
    }

    function hideMenu() {
        nav.removeClass("show");
        header.removeClass("nav__show");
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        hideMenu();

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });



    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        toggleMenu();
    });



    /* Reviews: https://kenwheeler.github.io/slick/ */
    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    let customersSlider = $("#customersSlider");

    customersSlider.slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

});
