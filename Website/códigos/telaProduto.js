document.querySelectorAll('.tom').forEach(tom => {
    tom.addEventListener('click', function(){
        document.querySelectorAll('.tom').forEach(t => t.classList.remove('selecionado'));
        this.classList.add('selecionado');

        const noemTom = this.getAttribute('data-tone');

        document.querySelector('.nome-tom-selecionado').textContent = `Tom selecionado: ${noemTom}`
    });
});

//parte inferior
let quantidade = 1;
document.getElementById("aumentar").addEventListener("click", () => {
  quantidade++;
  document.getElementById("quantidade").innerText = quantidade;
});

document.getElementById("diminuir").addEventListener("click", () => {
  if (quantidade > 1){
    quantidade--;
    document.getElementById("quantidade".innerText = quantidade);
  }
});

//abas
function abrirAba(evento, idAba){
  const conteudos = document.querySelectorAll(".conteudo-aba");
  conteudos.forEach((conteudo) => conteudo.classList.remove(".ativo"));

  const aba = document.getElementById(idAba);
  aba.classList.add(".ativo");
}