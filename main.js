$(document).ready(function() {
    $('header button').click(function (){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        adicionaTarefa();
    });

    $('tbody').on('click', '.concluir', function() {
        $(this).closest('tr').addClass('concluida');
        $(this).closest('tr').find('.descricao').addClass('concluida');
        $(this).closest('tr').find('.descricao').prop('contenteditable', 'false');
    });

    $('tbody').on('click', '.cancelar', function() {
        $(this).closest('tr').remove();
    });
});

function adicionaTarefa() {
    const descricao = $('#descricao-tarefa').val();
    if (descricao.trim() === '') {
        alert('Por favor, insira uma descrição para a tarefa.');
        return;
    }

    const novaLinha = $('<tr><td class="descricao">' + descricao + '</td><td><button class="concluir">Concluir</button><button class="cancelar">Cancelar</button></td></tr>');
    $('tbody').append(novaLinha);
    $('#descricao-tarefa').val('');
    
}