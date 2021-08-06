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
    
})