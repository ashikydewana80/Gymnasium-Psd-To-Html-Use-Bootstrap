$(document).ready(function() {
    'use strict';

    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
    });

    $('#testimonial .testimonial-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 2,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:false,
                }
              },
        ],
    });

    new VenoBox({
        selector: '.abt-popup',
    });
    new VenoBox({
        selector: '.gallery-popup',
        spinner: 'pulse'
    });


    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });



    $('.brand-slider').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:true,
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:true,
                }
              },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:false,
                }
              },

        ],

    });

});