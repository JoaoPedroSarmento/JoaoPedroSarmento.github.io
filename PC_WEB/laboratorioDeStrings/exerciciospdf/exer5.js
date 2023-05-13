function substitiuPalavra(textoContainer, textoParaSubtituir, textoProcurado) {
  return textoContainer.split(textoProcurado).join(textoParaSubtituir);
}
document.getElementById("submit").addEventListener("click", () => {
  const p = document.getElementById("texto");
  const inputProcurar = document.getElementById("inputProcurar").value;
  const inputSubstituir = document.getElementById("inputSubstituir").value;
  const inputInserir = document.getElementById("inputInserir").value;
  if (inputInserir.length) {
    p.textContent += " " + inputInserir;
  } else if (inputProcurar.length && inputSubstituir.length) {
    const newP = substitiuPalavra(
      p.textContent,
      inputSubstituir,
      inputProcurar
    );
    p.textContent = newP;
  }
});
