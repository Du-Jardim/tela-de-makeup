(() => {
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
abas.forEach((aba) => {
  aba.addEventListener('click', () => {
    // Remove a classe "ativa" de todas as abas e conteúdos
    abas.forEach((a) => a.classList.remove('ativa'));
    conteudos.forEach((conteudo) => conteudo.classList.remove('ativa'));

    // Adiciona a classe "ativa" à aba clicada e ao conteúdo correspondente
    aba.classList.add('ativa');
    const conteudoAlvo = document.getElementById(aba.dataset.tab);
    conteudoAlvo.classList.add('ativa');
  });
});

})();






