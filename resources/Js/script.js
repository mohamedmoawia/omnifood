$(document).ready(function () {
    /* sticky navigation */ 
    $('.section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, { offset: '70px' })

    /* scroll on button */ 
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.section-plans').offset().top }, 1000);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.section-features').offset().top }, 1000);
    })

    
    $('.mobile-nav-icon').click(function(){
    const nav = $('.nav-list');
    const icon = $('.mobile-nav-icon i');
    nav.slideToggle(200);
    if(icon.hasClass('fa-bars')){
        icon.removeClass('fa-bars');
        icon.addClass('fa-times');
    }else{
        icon.removeClass('fa-times');
        icon.addClass('fa-bars');
    }


    })


    $('.section-features').waypoint(function(){
        $('.js--animate-features').addClass('animate__animated animate__fadeIn animate__slow');
    }, {offset: '20%'})

    $('.section-steps').waypoint(function(){
        $('.js--animate-iphone').addClass('animate__animated animate__backInUp');
    }, {offset: '20%'})

    
    $('.section-cities').waypoint(function(){
        $('.js--animate-cities').addClass('animate__animated animate__fadeInTopLeft');
    }, {offset: '20%'})

    $('.section-plans').waypoint(function(){
        $('.js--animate-plans').addClass('animate__animated animate__pulse');
    }, {offset: '20%'})

})

