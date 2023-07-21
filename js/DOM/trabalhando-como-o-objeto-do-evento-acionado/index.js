document.getElementById("btn").addEventListener("click", function (ev) {
    console.log(ev);
})

function tempoDeCarregamentoDaPagina(ev) {
    console.log(ev.timeStamp);
}

window.addEventListener("load", tempoDeCarregamentoDaPagina);
// window.addEventListener("load", function (ev) {
//     tempoDeCarregamentoDaPagina(ev);
// });