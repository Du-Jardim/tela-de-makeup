(() => {

  //navbar
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

//thumbnails
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
      const mainImage = document.querySelector('.img-produto img'); // Seleciona a imagem principal
      mainImage.src = this.src; // Atualiza com a miniatura clicada
  });
});

  document.querySelectorAll('.tom').forEach(tom => {
    tom.addEventListener('click', function(){
        document.querySelectorAll('.tom').forEach(t => t.classList.remove('selecionado'));
        this.classList.add('selecionado');
  
        const nomeTom = this.getAttribute('data-tone');
        document.querySelector('.nome-tom-selecionado').textContent = `Tom selecionado: ${nomeTom}`;
    });
  });
  
  //parte inferior
  let quantidade = 1;

  document.getElementById("aumentar").addEventListener("click", () => {
    quantidade++;
    document.getElementById("quantidade").innerText = quantidade;
});

  document.getElementById("diminuir").addEventListener("click", () => {
    if (quantidade > 1) {
        quantidade--;
        document.getElementById("quantidade").innerText = quantidade;
    }
});

  
  
  //quantidade
  function alterarQuantidade(valor){
  const spanQuantidade = document.querySelector('.quantidade-valor');
  let quantidadeAtual = parseInt (spanQuantidade.textContent, 10);
  
  quantidadeAtual = Math.max(1, quantidadeAtual + valor);
  spanQuantidade.textContent = quantidadeAtual
  }
  //abas
// Seleciona as abas e os conteúdos
const abas = document.querySelectorAll('.aba');
const conteudos = document.querySelectorAll('.conteudo-aba');

// Adiciona evento de clique às abas
document.querySelectorAll('.aba').forEach(aba => {
  aba.addEventListener('click', () => {
      // Remover a classe ativa de todas as abas
      document.querySelectorAll('.aba').forEach(el => el.classList.remove('ativa'));
      // Adicionar a classe ativa na aba clicada
      aba.classList.add('ativa');

      // Exibir o conteúdo correspondente
      const conteudo = document.querySelector(`#${aba.dataset.tab}`);
      document.querySelectorAll('.conteudo-aba').forEach(el => el.classList.remove('ativa'));
      conteudo.classList.add('ativa');
  });
});

})();






