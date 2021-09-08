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

    function IsEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

    function isValidForm() {
        if(name.val() == '') {
            return {
                success: false,
                error: {
                    field: 'name',
                    message: 'Preencha o nome'
                }
            }
        }
        
        if(email.val() == '') {
            return {
                success: false,
                error: {
                    field: 'email',
                    message: 'Preencha o email'
                }
            }
        }

        if(!IsEmail(email.val())) {
            return {
                success: false,
                error: {
                    field: 'email',
                    message: 'Email inválido'
                }
            }
        }

        if(message.val() == '') {
            return {
                success: false,
                error: {
                    field: 'message',
                    message: 'Preencha a mensagem'
                }
            }
        }

        return { success: true };
    }

    function cleanErrors() {
        $('[class^="error-"]').text('').hide('fast');
    }

    var name = $('[name="name"]').first();
    var email = $('[name="email"]').first();
    var message = $('[name="message"]').first();
    var sending = false;

    $('body').on('click', '.send-button', function(e) {
        
        e.stopPropagation();
        e.preventDefault();
        
        if(sending) {
            return false;
        }
        sending = true;

        cleanErrors();

        var validation = isValidForm();

        if(!validation.success) {
            sending = false;
            var errorTag = $('[class="error-'+ validation.error.field +'"]');
            errorTag.text(validation.error.message).show('fast', function() {
                $('html,body').animate({
                    scrollTop: errorTag.prev().offset().top - 100 
                }, 'fast');
            });

            return false;
        }
        
        var data = {
            name: name.val(), 
            email: email.val(),
            message: message.val()
        };

        $.post( "send.php", data, function(res) {
            var response = JSON.parse(res);
            var type = response.success ? 'success' : 'error';
            toastr[type](response.message);

            if(response.success) {
                name.val('');
                email.val('');
                message.val('');
            }
        })
        .fail(function(error) {
            console.log( error );
        })
        .always(function() {
            sending = false;
            cleanErrors();
        });

    });
    
})