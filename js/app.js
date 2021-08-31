// https://bestjquery.com/tutorial/testimonial/demo58/

$(document).ready(function() {

    if($('a[data-rel^=lightcase]').length) {
        var lightCaseConfig = {
            'errorMessage': 'Arquivo não encontrado...',
            'sequenceInfo.of': ' de ',
            'close': 'Fechar',
            'navigator.prev': 'Anterior',
            'navigator.next': 'Próxima',
            'navigator.play': 'Play',
            'navigator.pause': 'Pause',
            'swipe': true
        };
    
        $('a[data-rel^=lightcase]').lightcase(lightCaseConfig);
    }

    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:false
    });

    $('.main-menu li a, .side-menu li a').on('click', function(e) {
        e.preventDefault();

        var target = $(this).attr('href');

        var gap = $('.wrapper').hasClass('min') ? 70 : 140;

        if($(this).closest('.side-menu').length) {
            gap = 20;
            $('#nav-icon').trigger('click');
        }

        

        $('html,body').animate({
            scrollTop: $(target).first().offset().top - gap 
        }, 'slow');
    });

    var wrapper = $('.wrapper');
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        
        if(scroll > 50) {
            if(!wrapper.hasClass('min')) {
                wrapper.addClass('min');
            }
        } else {
            if(wrapper.hasClass('min')) {
                wrapper.removeClass('min');
            }
        }
    });
    
    $('#nav-icon').on('click', function(){
        $(this).toggleClass('open');
        $('#side-menu-wrapper').toggleClass('open');
        $('.overlay').toggleClass('open');
    });
    
})