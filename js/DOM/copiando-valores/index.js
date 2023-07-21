function copiarTexto() {
    const textoInserido = document.getElementById("input").value
    navigator.clipboard.writeText(textoInserido);
}

document.getElementById("copy").addEventListener("click", copiarTexto);