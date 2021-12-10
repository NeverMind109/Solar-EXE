$(function(){
    // Tabs
    $('.info-tabs__item').on('click', function(e){
        e.preventDefault();
        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active');

        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active');
    });

    // Slick slider info section
    $('.info-slider').slick({
        infinite: true,
        speed: 400,
        fade: true,
        nextArrow: '<button class="slick-button slick-button-next"><svg class="slick-next" width="40px" height="8px"><use xlink:href="images/icons.svg#slick-next"></use></svg></button>',
        prevArrow: '<button class="slick-button slick-button-prev"><svg class="slick-prev" width="40px" height="8px"><use xlink:href="images/icons.svg#slick-prev"></use></svg></button>',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                arrows: false,
              }
            },
        ]
    });

    // Parallax
    $('.blockquote').parallax({imageSrc: '../images/blockquote-bg.jpg'});

    // Slick slider clients section
    $('.clients-slider').slick({
        infinite: true,
        speed: 400,
        fade: true,
        nextArrow: '<button class="slick-button slick-button-next"><svg class="slick-next" width="40px" height="8px"><use xlink:href="images/icons.svg#slick-next"></use></svg></button>',
        prevArrow: '<button class="slick-button slick-button-prev"><svg class="slick-prev" width="40px" height="8px"><use xlink:href="images/icons.svg#slick-prev"></use></svg></button>',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                arrows: false,
              }
            },
        ]
    });

    // Плавные якорные ссылки
    $(".header__button").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });
    $(".clients__button").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });
});