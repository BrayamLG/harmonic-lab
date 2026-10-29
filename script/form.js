const formulario = document.getElementById("dj-form");

formulario.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    if (nome.length < 2) {
        event.preventDefault();
        alert("O nome artístico precisa ter pelo menos 2 caracteres.");
        return;
    }

    if (descricao.length < 10) {
        event.preventDefault();
        alert("Escreva pelo menos 10 caracteres sobre seu som.");
        return;
    }
});
