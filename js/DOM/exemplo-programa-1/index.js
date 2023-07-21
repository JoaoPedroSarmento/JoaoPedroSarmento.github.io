const arrayPalavras = [];
let position = 0;
let buttonsAdd = false;

function addPalavra() {
    const input = document.getElementById("texto");
    arrayPalavras.push(input.value);
    if (!buttonsAdd) {
        adicionarBotao();
    }
    mostrarPalavra();
}
function adicionarBotao() {
    const btnBefore = document.createElement("button");
    const btnAfter = document.createElement("button");

    btnBefore.innerText = "Palavra Anterior";
    btnBefore.id = "btn-before";

    btnAfter.innerText = "Próxima Palavra";
    btnAfter.id = "btn-after";

    btnAfter.addEventListener("click", proximaPalavra);
    btnBefore.addEventListener("click", palavraAnterior);

    const section = document.getElementById("palavras");
    section.append(btnBefore, btnAfter);
    buttonsAdd = true;
}

function mostrarPalavra() {
    if (position < 0) {
        position = arrayPalavras.length - 1;
    } else if (position >= arrayPalavras.length) {
        position = 0;
    }
    document.getElementById("palavra").innerText = arrayPalavras[position];
}
function palavraAnterior() {
    position--;
    mostrarPalavra();
}

function proximaPalavra() {
    position++;
    mostrarPalavra();
}

document.getElementById("add-palavra").addEventListener("click", addPalavra);

