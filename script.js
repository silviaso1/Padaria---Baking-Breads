//mudando a paginaçao do index.html

function mostrarPagina(numeroPagina) {
  const avaliacoesElements = document.querySelectorAll('.avaliacao');

  const itensPorPagina = 2;
  const comeco = (numeroPagina - 1) * itensPorPagina;
  const fim = comeco + itensPorPagina;

  avaliacoesElements.forEach(function (avaliacao, posicao) {
      if (posicao >= comeco && posicao < fim) {
          avaliacao.classList.remove('hidden');
      } else {
          avaliacao.classList.add('hidden');
      }
  });
}

window.onload = function () {
    mostrarPagina(1);
};

//barra lateral fazer subir e descer
window.addEventListener('scroll', function() {
    const barraLateral = document.querySelector('.barra-lateral');
    const scrollAtual = window.scrollY;
    const posicaoDescida = 1080;
    const alturaLimite = 760; 

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

//mudanca de paginaçao do produtos.html

function mudançaPage(pageNumber) {
    
  const pages = document.querySelectorAll('.gallery');
  let selectedPage;
  pages.forEach(function(page) {
     page.classList.add('hidden');
  });

  selectedPage = document.getElementById('page' + pageNumber);
  selectedPage.classList.remove('hidden');
  }

 
  let total = 0;

function adicionarItem() {
  const itemSelect = document.getElementById('itemSelect');
  const nomeItem = itemSelect.value;
  const imagemItem = itemSelect.options[itemSelect.selectedIndex].dataset.imagem;
  const precoItem = parseFloat(itemSelect.options[itemSelect.selectedIndex].dataset.preco);

  const quantidadeInput = document.getElementById('quantidadeInput');
  const quantidade = parseInt(quantidadeInput.value);

  let containerItem;

  if (nomeItem && imagemItem && quantidade && quantidade > 0) {
    containerItem = document.getElementById('itemContainer');
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('itens-compra');

    const nomeItemDiv = document.createElement('div');
    nomeItemDiv.classList.add('nome-item');

    const imagemItemDiv = document.createElement('div');
    imagemItemDiv.classList.add('imagem-item');
    const img = document.createElement('img');
    img.src = imagemItem;
    img.alt = nomeItem;
    imagemItemDiv.appendChild(img);

    const nomeProdutoTexto = document.createElement('span');
    nomeProdutoTexto.classList.add('nome-produto-texto');
    nomeProdutoTexto.textContent = nomeItem;

    nomeItemDiv.appendChild(imagemItemDiv);
    nomeItemDiv.appendChild(nomeProdutoTexto);

    const quantidadeInputDiv = document.createElement('div');
    quantidadeInputDiv.classList.add('quantidade-container');

    const quantidadeInputItem = document.createElement('input');
    quantidadeInputItem.type = 'text';
    quantidadeInputItem.value = quantidade;
    quantidadeInputItem.classList.add('quantidade-input');
    quantidadeInputItem.addEventListener('input', function () {
      atualizarQuantidade(quantidadeInputItem, precoItem, nomeItem);
    });

    const removerButton = document.createElement('button');
    removerButton.classList.add('remover');
    removerButton.textContent = 'Remover';
    removerButton.onclick = function () { removerItem(itemDiv, precoItem, quantidade); };

    const valorUnitarioDiv = document.createElement('div');
    valorUnitarioDiv.classList.add('valor-unitario');
    valorUnitarioDiv.textContent = 'Unitário: R$' + precoItem.toFixed(2);

    quantidadeInputDiv.appendChild(quantidadeInputItem);
    quantidadeInputDiv.appendChild(valorUnitarioDiv);

    itemDiv.appendChild(nomeItemDiv);
    itemDiv.appendChild(quantidadeInputDiv);
    itemDiv.appendChild(removerButton);

    containerItem.appendChild(itemDiv);

    const precosLista = document.querySelector('.precos-lista');
    const precoDiv = document.createElement('div');
    precoDiv.textContent = nomeItem + ' (' + quantidade + 'x) - R$' + (precoItem * quantidade).toFixed(2);
    precoDiv.classList.add('preco-individual');
    precosLista.appendChild(precoDiv);

    total += precoItem * quantidade;
    document.querySelector('.total').innerText = 'Total: R$' + total.toFixed(2);

    itemSelect.value = 'selecao';
    quantidadeInput.value = '';
  }
}

function removerItem(itemRemover, precoRemover, quantidadeRemover) {
  itemRemover.remove();
  const precosLista = document.querySelector('.precos-lista');
  precosLista.removeChild(precosLista.lastChild);
  total -= precoRemover * quantidadeRemover;
  document.querySelector('.total').innerText = 'Total: R$' + total.toFixed(2);
}

function atualizarQuantidade(inputQuantidade, precoItem, nomeItem) {
  const novaQuantidade = +inputQuantidade.value;
  if (novaQuantidade >= 1) {
    const precoTotalElement = inputQuantidade.parentElement.parentElement.querySelector('.preco-individual');
    const novoPrecoTotal = precoItem * novaQuantidade;
    precoTotalElement.textContent = nomeItem + ' (' + novaQuantidade + 'x) - R$' + novoPrecoTotal.toFixed(2);
    const precoTotalContainer = document.querySelector('.total');
    precoTotalContainer.textContent = 'Total: R$' + total.toFixed(2);
  }
}