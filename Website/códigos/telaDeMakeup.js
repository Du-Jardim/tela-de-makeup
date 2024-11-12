//NAV BAR
// Adiciona funcionalidade de redirecionamento ao clicar no logo//
document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';  // Redireciona para a página inicial
});

// Funcionalidade de pesquisa
document.querySelector('#search-button').addEventListener('click', function() {
    const query = document.querySelector('#search-bar').value;
    if (query) {
        alert('Você pesquisou por: ' + query);
        // Aqui você pode adicionar a lógica de pesquisa para redirecionar ou buscar produtos
    } else {
        alert('Digite algo para buscar.');
    }
});
//NAV BAR

//lista produtos exemplo

//funcao para carregar os produtos na página
function carregarProdutos(){
    const listaProdutos = document.getElementById('listaProdutos');

    produtos.forEach(produto => {
        const card = document.createElement ("div")
        card.classList.add('produto');
        card.innerHTML = ` 
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class= "detalhes">
        <p class="nome">${produtos.nome}</p>
        <p class= "descricao">${produtos.descricao}</p>
        <p class= 'preco'>${produtos.preco}</p>
        </div>
        `;

        listaProdutos.appendChild(card);
    });
}

//filtrar produtos
function filtrarProdutos(categoria){
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        if (categoria === 'Todos' || produto.dataset.categoria === categoria){
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none'
        }
    });
}
window.onload = carregarProdutos