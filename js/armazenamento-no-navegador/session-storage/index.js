function armazernarValoresNaSessionStorage() {
    const input = document.getElementById("input-text");
    // key: informacao, valor: input.value
    sessionStorage.setItem("informacao", input.value);
}
function lerValorDaChaveDaSessionStorage() {
    const valorChave = sessionStorage.getItem("informacao");
    console.log(valorChave);
}
document.getElementById("guardar-session").addEventListener("click", armazernarValoresNaSessionStorage);
document.getElementById("ler-session").addEventListener("click", lerValorDaChaveDaSessionStorage);