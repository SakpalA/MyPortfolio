$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 50) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        };

        //  scroll-up-btn show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    });

    // Slide up
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css('scrollBehavior', 'auto');
    });


    // applying again smooth scroll on menu items click
    $('.header .menu li a').click(function () {
        $('html').css('scrollBehavior', 'smooth');
    });

    // toggle menu
    $('.menu-btn').click(function () {
        $('nav .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })

    // typing text animation
    var type = new Typed('.typing', {
        strings: ['Front-End Developer', 'Designer'],
        typeSpped: 100,
        backSpeed: 60,
        loop: true
    })

    var type = new Typed('.typing-2', {
        strings: ['Front-End Developer', 'Designer'],
        typeSpped: 100,
        backSpeed: 60,
        loop: true
    })
})