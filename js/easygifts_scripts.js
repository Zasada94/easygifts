function bannersTiles() {
    $('.grid-banners').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
}
function categoriesFilters() {
    $('form#search-form .btn-filter').on('click', function () {
        $('form#search-form .search-by').toggleClass('hidden');
    });
}

function counterUp() {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({countNum: $this.text()}).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            }
        );
    });
}

function mobileNavigation() {

    // matchMedia
    var mediaQuery = window.matchMedia('(max-width: 767px)');
    mediaQuery.addListener(moveNavigation);

    function moveNavigation(mediaQuery) {
        if (mediaQuery.matches) {
            $('.top-menu .access').insertBefore('.main-menu .navbar-nav');
        }
        else {
            $('.main-menu .access').insertAfter('.top-menu .logo');
        }
    }
    moveNavigation(mediaQuery);

    // dropdown submenu dismiss click
    $('#navbar .navbar-nav .dropdown-toggle').on('click', function(event) {
        event.stopPropagation();
    });

    /*
    // add overlay
    $('#navbar').on('mouseenter', function() {
        $('#overlay').removeClass('hidden').addClass('in');
    });
    $('#navbar').on('mouseleave', function() {
        $('#overlay').removeClass('in').addClass('hidden');
    });
    */

}
function navAutoSetHeight() {

    var navAutoHeight = function () {
        $('body').css('padding-top', $('nav.navbar-fixed-top').height());
    };

    navAutoHeight();
    $(window).resize(navAutoHeight);
}
function cartWizard() {

    $('#cart-wizard a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $('#cart-wizard .next-step').click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');

        $active.next().removeClass('disabled');
        nextTab($active);
    });

    $('#cart-wizard .prev-step').click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');

        prevTab($active);
    });


    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

}

function sliderProduct() {

    $('#slider-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '#slider-product-thumbnails'
    });

    $('#slider-product-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#slider-product',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });


    // remove active class from all thumbnail slides
    $('#slider-product-thumbnails .slick-slide').removeClass('slick-active');

    // set active class to first thumbnail slides
    $('#slider-product-thumbnails .slick-slide').eq(0).addClass('slick-active');

    // on before slide change match active thumbnail to current slide
    $('#slider-product').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('#slider-product-thumbnails .slick-slide').removeClass('slick-active');
        $('#slider-product-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    $('#modal-slider-zoom figure').zoom();
}

function sliderProfile() {

    $('#slider-profile').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 30000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
}
function sliderPromotions() {

    $('#slider-promotions').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 30000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
}

function sliderAbout() {

    $('#slider-about').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 30000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

}

function sliderAboutUs() {

    $('#slider-about-us').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

}

function slidersHome1() {

    $('#slider-products1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

}

function slidersHome2() {

    $('#slider-products2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

}

function slidersHomeBrands() {

    $('#slider-home-brands').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                    dots: false
                }
            }
        ]
    });

}

function slidersHomeAbout() {

    $('#slider-home-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        focusOnSelect: true,
        draggable: false
    });

}

function tooltip() {

    $('[data-toggle="tooltip"]').tooltip({
        container: 'nav'
    });
}
jQuery(document).ready(function($){
    'use strict';
    tooltip();
    bannersTiles();
    sliderPromotions();
    sliderProduct();
    sliderAbout();
    sliderProfile();
    counterUp();
    categoriesFilters();
    mobileNavigation();
    navAutoSetHeight();
    cartWizard();
    slidersHome1();
    slidersHome2();
    slidersHomeBrands();
    slidersHomeAbout();
    sliderAboutUs();
});