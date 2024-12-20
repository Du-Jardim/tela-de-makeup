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

//banner
//banner

let indiceAtual = 0;

const carrossel = document.querySelector('.carrossel');
const banners = document.querySelector('.banners');
const numeroDeBanners = document.querySelectorAll('.banner').length;

// Função para mudar o banner
function mudarBanner() {
    // Calcula a largura atual do carrossel
    const larguraBanner = carrossel.offsetWidth;

    // Atualiza o índice do banner atual
    indiceAtual = (indiceAtual + 1) % numeroDeBanners;

    // Desloca o contêiner de banners
    banners.style.transform = `translateX(-${indiceAtual * larguraBanner}px)`;
}

// Troca o banner a cada 3 segundos
setInterval(mudarBanner, 3000);

// Ajusta o carrossel ao redimensionar a tela
window.addEventListener('resize', () => {
    // Atualiza a posição do carrossel ao redimensionar
    const larguraBanner = carrossel.offsetWidth;
    banners.style.transform = `translateX(-${indiceAtual * larguraBanner}px)`;
});


//banner
//lista produtos exemplo

//parte nova
 // Função para rolagem suave do carrossel
 const carousel = document.querySelector('.carrossel');
 let scrollAmount = 0;
 
 function scrollCarousel() {
     if (scrollAmount < carrossel.scrollWidth - carrossel.offsetWidth) {
         scrollAmount += 300;
         carrossel.scrollTo({
             left: scrollAmount,
             behavior: 'smooth'
         });
     } else {
         scrollAmount = 0;
         carrossel.scrollTo({
             left: scrollAmount,
             behavior: 'smooth'
         });
     }
 }
 
 // Intervalo para rolar automaticamente
 setInterval(autoScrollCarrossel, 3000);
 
//parte nova
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