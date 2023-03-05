const Images = document.querySelectorAll("img");

// Alterando o Alt de cada imagem
Images.forEach(function (valor, indice) {
  console.log(valor.alt);
  indice = indice + 1;
  valor.alt = "Imagem " + indice;
});

//Mostrando no console os alts que foram alterados
Images.forEach(function (valor) {
  console.log(valor.alt);
});

const PElements = document.getElementsByName("Paragraph");

console.log(PElements);
PElements.forEach(function (valor, indice) {
  console.log(valor.innerText);
});
