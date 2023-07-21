const container = document.querySelector(".container");

function removeCard(ev) {
    console.log(ev);
    const card = ev.currentTarget.parentNode; // pegando o  card  do botao que foi clicado
    // como já foi dito: ev é um objeto referente ao evento que está sendo acionado, esse objeto possui algumas propriedades,
    // currentTarget é uma delas, através dela é possível pegar o elemento do HTMl que acionou o evento.
    // parentNode serve para pegar o elemento pai de um elemento qualquer
    console.log(card);
    container.removeChild(card);
}
function adicionaEventListener(botao) {
    botao.addEventListener("click", removeCard);
}
document.querySelectorAll(".btn").forEach(adicionaEventListener);


