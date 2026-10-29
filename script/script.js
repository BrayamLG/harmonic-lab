const tracks = [
    {
        nome: "Midnight Drive",
        estilo: "Melodic House",
        bpm: 124,
        camelot: "8A",
        energia: 4
    },
    {
        nome: "Neon Pulse",
        estilo: "Progressive House",
        bpm: 126,
        camelot: "9A",
        energia: 5
    },
    {
        nome: "Golden Hour",
        estilo: "Deep House",
        bpm: 122,
        camelot: "8B",
        energia: 3
    }
];


// Exibe todas as faixas na biblioteca musical.

function mostrarTracks() {
    const lista = document.getElementById("track-list");

    lista.replaceChildren();

    for (let i = 0; i < tracks.length; i++) {
        const faixa = tracks[i];

        const cartao = document.createElement("div");
        cartao.classList.add("track-card");

        const nome = document.createElement("h3");
        nome.textContent = faixa.nome;

        const estilo = document.createElement("p");
        estilo.textContent = "Estilo musical: " + faixa.estilo;

        const bpm = document.createElement("p");
        bpm.textContent = "BPM: " + faixa.bpm;

        const tonalidade = document.createElement("p");
        tonalidade.textContent = "Tonalidade Camelot: " + faixa.camelot;

        const energia = document.createElement("p");
        energia.textContent = "Energia: " + faixa.energia + "/5";

        cartao.appendChild(nome);
        cartao.appendChild(estilo);
        cartao.appendChild(bpm);
        cartao.appendChild(tonalidade);
        cartao.appendChild(energia);

        lista.appendChild(cartao);
    }
}


// Verifica se duas tonalidades são compatíveis.

function verificarCompatibilidade(tonalidadeAtual, tonalidadeTrack) {
    const numeroAtual = parseInt(tonalidadeAtual);
    const numeroTrack = parseInt(tonalidadeTrack);

    const letraAtual = tonalidadeAtual.charAt(
        tonalidadeAtual.length - 1
    );

    const letraTrack = tonalidadeTrack.charAt(
        tonalidadeTrack.length - 1
    );

    // A mesma tonalidade é compatível.

    if (tonalidadeAtual === tonalidadeTrack) {
        return true;
    }

    // Mesmo número e letras diferentes.

    if (numeroAtual === numeroTrack && letraAtual !== letraTrack) {
        return true;
    }

    // Números vizinhos com a mesma letra.

    if (letraAtual === letraTrack) {
        if (Math.abs(numeroAtual - numeroTrack) === 1) {
            return true;
        }

        // A roda Camelot também conecta 12 e 1.

        if (
            (numeroAtual === 12 && numeroTrack === 1) ||
            (numeroAtual === 1 && numeroTrack === 12)
        ) {
            return true;
        }
    }

    return false;
}


// Procura e exibe as faixas compatíveis com a seleção.

function encontrarTracks() {
    const tonalidadeAtual = document.getElementById("current-key").value;
    const resultados = document.getElementById("match-results");

    resultados.replaceChildren();

    const titulo = document.createElement("h3");
    titulo.textContent = "Resultados da compatibilidade";

    resultados.appendChild(titulo);

    let quantidade = 0;

    for (let i = 0; i < tracks.length; i++) {
        const faixa = tracks[i];

        if (
            verificarCompatibilidade(
                tonalidadeAtual,
                faixa.camelot
            )
        ) {
            const cartao = document.createElement("div");
            cartao.classList.add("match-card");

            const nome = document.createElement("h4");
            nome.textContent = faixa.nome;

            const estilo = document.createElement("p");
            estilo.textContent = "Estilo musical: " + faixa.estilo;

            const detalhes = document.createElement("p");
            detalhes.textContent =
                "BPM: " + faixa.bpm +
                " | Tonalidade: " + faixa.camelot;

            const energia = document.createElement("p");
            energia.textContent = "Energia: " + faixa.energia + "/5";

            cartao.appendChild(nome);
            cartao.appendChild(estilo);
            cartao.appendChild(detalhes);
            cartao.appendChild(energia);

            resultados.appendChild(cartao);

            quantidade++;
        }
    }

    if (quantidade === 0) {
        const mensagem = document.createElement("p");

        mensagem.textContent =
            "Nenhuma faixa compatível foi encontrada para essa tonalidade.";

        resultados.appendChild(mensagem);
    }
}


// Inicia a biblioteca e configura o botão.

mostrarTracks();

document.getElementById("match-button").addEventListener(
    "click",
    encontrarTracks
);
