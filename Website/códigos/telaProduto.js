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
  document.addEventListener('DOMContentLoaded', () => {
    const abas = document.querySelectorAll('.aba');
    const conteudosAba = document.querySelectorAll('.conteudo-aba');
    
    if (abas && conteudosAba) {
      abas.forEach(aba => {
        aba.addEventListener('click', () => {
          abas.forEach(a => a.classList.remove('ativa'));
          conteudosAba.forEach(ca => ca.classList.remove('ativa'));
          
          aba.classList.add('ativa');
          document.getElementById(aba.dataset.tab).classList.add('ativa');
        });
      });
    }
  });
})();






