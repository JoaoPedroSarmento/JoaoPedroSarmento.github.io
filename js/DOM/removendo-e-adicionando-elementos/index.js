function verificaSeHaNumero(string) {
    for (let i = 0; i < string.length; i += 1) {
        if (!isNaN(+string[i])) {
            return true;
        }
    }
    return false;
}
function addPlayer() {
    const article = document.getElementById("players");
    const posicao = document.getElementById("position").value;
    const nome = document.getElementById("name").value;
    const camisa = document.getElementById("camisa").value;
    const h3 = document.createElement("h3");
    h3.innerText = "Jogadores : ";
    const div = document.createElement("div");
    if (posicao.length && nome.length && camisa.length) {
        if (verificaSeHaNumero(posicao) || verificaSeHaNumero(nome)) {
            alert("Dados inválidos!");
        }
        else {
            div.classnome = "container";
            div.appendChild(h3);
            div.innerHTML = `<h4> Nome : ${nome}</h4> <h4> Posição : ${posicao} </h4> <h4>Número da camisa : ${camisa} </h4> `;
            article.appendChild(div);
            return true;
        }
    } else {
        alert("Dados inválidos!");
    }
}

function removePlayer() {
    const article = document.getElementById("players");
    const div = document.querySelectorAll("article > div");
    if (article.children.length) {
        article.removeChild(div[div.length - 1]);
    } else {
        alert("Não há nenhum jogador escalado!!");
    }
}

