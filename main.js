$(document).ready(function() {
    $("#form-tarefa").submit(function(e) {
        e.preventDefault();

        const tarefa = $("#tarefa").val().trim();

        if (tarefa !== "") {
            $("#lista-tarefas").append(`
                <li>
                    <span class="texto-tarefa">${tarefa}</span>
                    <button class="remove-btn">Remover</button>
                </li>
            `);
            $("#tarefa").val("");
        }
    });

    $("#lista-tarefas").on("click", ".texto-tarefa", function() {
        $(this).closest("li").toggleClass("concluida");
    });

    $("#lista-tarefas").on("click", ".remove-btn", function(e) {
        $(this).parent().fadeOut(200, function() {
            $(this).remove();
        });
    });
});
