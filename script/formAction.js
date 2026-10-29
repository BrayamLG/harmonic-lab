const parametros = new URLSearchParams(window.location.search);

const nome = parametros.get("nome");
const email = parametros.get("email");
const estilo = parametros.get("estilo");
const experiencia = parametros.get("experiencia");
const camelot = parametros.get("camelot");
const descricao = parametros.get("descricao");

const resultado = document.getElementById("resultado");

if (
    !nome ||
    !email ||
    !estilo ||
    !experiencia ||
    !camelot ||
    !descricao
) {
    resultado.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = "Nenhum perfil encontrado";

    const mensagem = document.createElement("p");
    mensagem.textContent =
        "Preencha o formulário para visualizar seu perfil musical.";

    resultado.appendChild(titulo);
    resultado.appendChild(mensagem);

} else {
    resultado.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = "Perfil criado com sucesso!";

    resultado.appendChild(titulo);

    function adicionarCampo(rotulo, valor) {
        const grupo = document.createElement("div");
        grupo.classList.add("profile-field");

        const label = document.createElement("h3");
        label.textContent = rotulo;

        const texto = document.createElement("p");
        texto.textContent = valor;

        grupo.appendChild(label);
        grupo.appendChild(texto);

        resultado.appendChild(grupo);
    }

    adicionarCampo("Nome artístico", nome);
    adicionarCampo("E-mail", email);
    adicionarCampo("Estilo musical", estilo);
    adicionarCampo("Experiência", experiencia);
    adicionarCampo("Tonalidade Camelot favorita", camelot);
    adicionarCampo("Sobre seu som", descricao);
}
