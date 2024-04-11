// Com jQuery, inicia-se com $
// (document) refere-se ao HTML
$(document).ready(function() {
    $('header button').click(function (){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeDaTarefa = $('input').val();
        // Aspas servem para concatenação de valores
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`);

        $(novaTarefa).appendTo('ul');
        $('input').val('');
    });

    $('ul').on('click', 'li', function(e){
        e.preventDefault();
        $(this).toggleClass('riscarTarefa');
    })
});