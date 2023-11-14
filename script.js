const avaliacoes = [
    { foto: 'https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_1x1.png', nome: 'Naruto da Silva', avaliacao: 'Muito bom! O sonho daqui é o melhor', audio: './audio/audio1.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
    { foto: './img/foto2.jpg', nome: 'Nome Avaliação 2', avaliacao: 'Avaliação 2', audio: './audio/audio2.mp3' },
];

const avaliacoesPorPagina = 2;
let paginaAtual = 1;

function mostrarPagina(numeroPagina) {
    const avaliacoesContainer = document.getElementById('avaliacoes');
    avaliacoesContainer.innerHTML = '';

    for (let i = 0; i < avaliacoesPorPagina; i++) {
        const index = (numeroPagina - 1) * avaliacoesPorPagina + i;
        if (index < avaliacoes.length) {
            const avaliacao = avaliacoes[index];
            const sectionAvaliacao = criarAvaliacao(avaliacao);
            avaliacoesContainer.appendChild(sectionAvaliacao);
        }
    }

    paginaAtual = numeroPagina;
}

function criarAvaliacao(avaliacao) {
    const sectionAvaliacao = document.createElement('section');
    sectionAvaliacao.classList.add('avaliacao');

    const img = document.createElement('img');
    img.src = avaliacao.foto;
    img.alt = 'Foto da avaliação';

    const h1Nome = document.createElement('h1');
    h1Nome.textContent = avaliacao.nome;

    const pAvaliacao = document.createElement('p');
    pAvaliacao.textContent = avaliacao.avaliacao;

    const audio = document.createElement('audio');
    audio.controls = true;
    const source = document.createElement('source');
    source.src = avaliacao.audio;
    source.type = 'audio/mp3';
    audio.appendChild(source);

    sectionAvaliacao.appendChild(img);
    sectionAvaliacao.appendChild(h1Nome);
    sectionAvaliacao.appendChild(pAvaliacao);
    sectionAvaliacao.appendChild(audio);

    return sectionAvaliacao;
}

function mostrarProximaPagina() {
    const proximaPagina = paginaAtual % Math.ceil(avaliacoes.length / avaliacoesPorPagina) + 1;
    mostrarPagina(proximaPagina);
}

window.onload = function () {
    mostrarPagina(1);
    setInterval(mostrarProximaPagina, 5000); // Trocará de página a cada 5000 milissegundos (5 segundos)
};
