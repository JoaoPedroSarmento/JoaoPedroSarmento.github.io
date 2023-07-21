function armazernarValoresNoLocalStorage() {
    const input = document.getElementById("input-text");
    localStorage.setItem("informacao", input.value);
}

function lerValorDaChaveDoLocalStorage() {
    const valorChave = localStorage.getItem("informacao");
    console.log(valorChave);
}

document.getElementById("guardar-local").addEventListener("click", armazernarValoresNoLocalStorage);
document.getElementById("ler-local").addEventListener("click", lerValorDaChaveDoLocalStorage); 