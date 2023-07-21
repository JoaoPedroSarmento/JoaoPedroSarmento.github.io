function substitiuPalavra(textoContainer, textoParaSubtituir, textoProcurado) {
    return textoContainer.split(textoProcurado).join(textoParaSubtituir);
}

function processaDados() {
    const p = document.getElementById("texto");
    const inputProcurar = document.getElementById("input-procurar").value;
    const inputSubstituir = document.getElementById("input-substituir").value;
    const inputInserir = document.getElementById("input-inserir").value;
    if (inputInserir) {
        p.textContent += " " + inputInserir;
    } else if (inputProcurar && inputSubstituir) {
        const newP = substitiuPalavra(
            p.textContent,
            inputSubstituir,
            inputProcurar
        );
        p.textContent = newP;
    }
}
document.getElementById("enviar-dados").addEventListener("click", processaDados)

// pág 233