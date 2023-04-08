$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });
    
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); /* como o "nav" está ocultado no css pelo "display none", esse slideToggle faz o efeito de aparecer e ocultar quando o menu hamburguer é clicado */
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
            required: true,
            email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Por favor, insira um telefone válido.',
            email: 'Por favor, insira um e-mail válido.',
            mensagem: 'Por favor, digite sua mensagem.',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        //aqui eu estou pegando o pai do botão (this) e procurando dentro dele o h3 e pegando o texto dele //
        
        $('#veiculo-interesse').val(nomeVeiculo);
        //aqui eu estou indo no input e atribuindo o valor da const "nomeVeiculo" nele //

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
        //aqui foi criado uma animação de rolagem da página quando o botão dentro da lista-veiculos for clicado//
    })
})