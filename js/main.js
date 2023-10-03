$(function(){
    
    $('.menu a, .go-top').on('click', function(event){
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;
        
        $('body, html').animate({scrollTop: top}, 1500);
    });


    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow-right"></button>',

    });

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');


    });


    var mixer = mixitup('.portfolio__content');
});