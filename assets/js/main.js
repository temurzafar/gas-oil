jQuery(document).ready(function(){

    ////////////////////////////// MOBILE BURGER INIT
    jQuery(document).on('click', 'header .bottom .container .d-flex .menu-burger', function(){
        jQuery('header').toggleClass('menu-active');
    })


    ////////////////////////////// ANCHOR AND BUTTON FOR TOP
    jQuery(document).on('click', '.anchor-animate, #up', function (e) {
        e.preventDefault();
        var t = jQuery(this).attr('href') ? jQuery(this).attr('href') : jQuery(this).attr('data-target');
        jQuery('html, body').stop().animate({ scrollTop: jQuery(t).offset().top }, 1000);
        if (jQuery('header').hasClass('menu-active')) jQuery('header').removeClass('menu-active');
    });
    // BTN FOR TOP
    jQuery(window).scroll(function(){
        if (jQuery(document).scrollTop() > jQuery(window).height()){
            jQuery('#up').addClass('active');
        }else{
            jQuery('#up').removeClass('active')
        }
    });


    ////////////////////////////// SLICK SLIDER INIT
    // INTRO
    if (jQuery('#intro .slider').length){
        jQuery('#intro .slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
        });
    }
    // PARTNERS
    if (jQuery('#partners .slider').length){
        jQuery('#partners .slider').slick({
            infinite: true,
            slidesToShow: 6,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }


    ////////////////////////////// AOS INIT
    AOS.init({disable: 'mobile'});
    
    


})









