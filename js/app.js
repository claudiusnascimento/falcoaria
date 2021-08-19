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
        autoPlay:true
    });
    
})