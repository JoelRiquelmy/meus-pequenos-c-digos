$(document).ready(function() {
    $('#form-lista').submit(function(e) {
        e.preventDefault();
        let nomeTarefa =  $('#input-tarefa').val().trim();
        if(nomeTarefa !== "") {
            $('#lista-de-tarefas').append('<li>' + nomeTarefa + '</li>');
            $('#input-tarefa').val("");
        }
    });
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

