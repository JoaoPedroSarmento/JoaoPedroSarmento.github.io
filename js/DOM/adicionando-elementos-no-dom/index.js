// Cria um array vazio para armazenar as palavras
const arrayPalavras = [];

// Seleciona o elemento de entrada de texto
const input = document.getElementById("palavra");

// Função para verificar se a palavra não foi adicionada
function verificaExistenciaDaPalavra(valor) {
    return !arrayPalavras.includes(valor);
}

// Função chamada quando o botão é clicado
function adicionarPalavra() {
    // Seleciona o elemento de entrada de texto desativado
    const inputDisabled = document.getElementById("input-disabled");
    // Tenta adicionar a palavra ao array
    if (verificaExistenciaDaPalavra(input.value)) {
        arrayPalavras.push(input.value);
        // Se a palavra for adicionada com sucesso, atualiza o valor do elemento de entrada de texto desativado
        inputDisabled.value = input.value;
        // Seleciona a lista de palavras
        const ul = document.getElementById("palavras");
        // Cria um novo elemento de lista e adiciona a palavra como seu texto
        const li = document.createElement("li");
        li.innerText = input.value;
        // Adiciona o novo elemento de lista à lista existente
        ul.appendChild(li);
    } else {
        // Se a palavra já existir no array, atualiza o valor do elemento de entrada de texto desativado com uma mensagem de erro
        inputDisabled.value = "Palavra já inserida";
    }
}
