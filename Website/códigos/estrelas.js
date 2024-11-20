
// Função para atualizar a quantidade de estrelas com base na nota
function atualizarEstrelas(nota) {
    // Seleciona todos os elementos de estrela dentro de #estrelas
    const estrelas = document.querySelectorAll("#estrelas .estrela");

    // Loop para percorrer cada estrela e ajustar a classe com base na nota
    estrelas.forEach((estrela, index) => {
        // Verifica se o índice da estrela é menor que a nota
        if (index < nota) {
            // Se a estrela estiver dentro da quantidade da nota, adiciona a classe "cheia" e remove "vazia"
            estrela.classList.add("cheia");
            estrela.classList.remove("vazia");
        } else {
            // Caso contrário, adiciona a classe "vazia" e remove "cheia"
            estrela.classList.add("vazia");
            estrela.classList.remove("cheia");
        }
    });
}


// Exemplo de uso: Atualizar com uma nota (pode ser um valor entre 0 e 5)


atualizarEstrelas(5);  //pra mudar a quantidade de estrelas mudar o parametro pra nota desejada !//
