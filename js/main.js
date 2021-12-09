$(function(){
    // Tabs
    $('.info-tabs__item').on('click', function(e){
        e.preventDefault();
        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active');

        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active');
    });
    // Slick slider
    $('.info-slider').slick({
        infinite: true,
        speed: 400,
        fade: true,
        nextArrow: '<button class="slick-button slick-button-next"><svg class="slick-next" width="40px" height="8px"><use xlink:href="images/icons.svg#next-arrow"></use></svg></button>',
        prevArrow: '<button class="slick-button slick-button-prev"><svg class="slick-prev" width="40px" height="8px"><use xlink:href="images/icons.svg#prev-arrow"></use></svg></button>',
    });
    // Parallax
    $('.blockquote').parallax({imageSrc: '../images/blockquote-bg.jpg'});
});