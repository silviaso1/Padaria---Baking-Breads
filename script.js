function mostrarPagina(numeroPagina) {
    const avaliacoesElements = document.querySelectorAll('.avaliacao');

    const itensPorPagina = 2;
    const startIndex = (numeroPagina - 1) * itensPorPagina;
    const endIndex = startIndex + itensPorPagina;

    avaliacoesElements.forEach(function (avaliacao, index) {
        if (index >= startIndex && index < endIndex) {
            avaliacao.classList.remove('hidden');
        } else {
            avaliacao.classList.add('hidden');
        }
    });

    paginaAtual = numeroPagina;
}


window.onload = function () {
    mostrarPagina(1);
};
window.addEventListener('scroll', function() {
    const barraLateral = document.querySelector('.barra-lateral');
    const scrollAtual = window.scrollY;
    const posicaoDescida = 500;
    const alturaLimite = 900; 

    let translateY;

    if (scrollAtual > posicaoDescida) {
        translateY = scrollAtual - posicaoDescida;

        if (translateY > alturaLimite) {
            translateY = alturaLimite;
        }

        barraLateral.style.transform = 'translateY(' + translateY + 'px)';
    } else {
        barraLateral.style.transform = 'translateY(0)';
    }
});



function pesquisarProdutos() {
    const termoPesquisa = document.getElementById('searchInput').value.toLowerCase();
    const produtos = document.querySelectorAll('.gallery-item');
  
    produtos.forEach(function (produto) {
      const nomeProduto = produto.querySelector('h1').textContent.toLowerCase();
      const estaIncluido = nomeProduto.includes(termoPesquisa);
  
      if (estaIncluido) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    });
  }
  function mudançaPage(pageNumber) {
    
    var pages = document.querySelectorAll('.gallery');
    pages.forEach(function(page) {
      page.classList.add('hidden');
    });

    var selectedPage = document.getElementById('page' + pageNumber);
    selectedPage.classList.remove('hidden');
  }