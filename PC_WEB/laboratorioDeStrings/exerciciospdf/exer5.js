// Poderia ser feito com replace!!!
function procurarPalavras(textoContainer, textoProcurado) {
  textoContainer = textoContainer.split(" ");
  return textoContainer.find((texto) => texto === textoProcurado);
}
function substitiuPalavra(textoContainer, textoParaSubtituir, textoProcurado) {
  const arrayTextoProcurado = textoProcurado.split(" ");
  textoParaSubtituir = textoParaSubtituir.split(" ");
  let arrayTextos = textoContainer.split(" ");
  for (let i = 0; i < arrayTextoProcurado.length; i += 1) {
    let palavra = procurarPalavras(textoContainer, arrayTextoProcurado[i]);
    if (palavra) {
      for (let k = 0; k < arrayTextos.length; k += 1) {
        if (palavra === arrayTextos[k]) {
          arrayTextos[k] = textoParaSubtituir[i];
        }
      }
    }
  }
  return arrayTextos.join(" ");
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
