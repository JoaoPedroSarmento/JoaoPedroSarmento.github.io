function diasDeVida(data) {
  const dataNascimentoObj = new Date(data);
  const diferenca = Date.now() - dataNascimentoObj.getTime();
  return Math.floor(diferenca / (1000 * 60 * 60 * 24));
}

document.getElementById("submit").addEventListener("click", () => {
  const p = document.getElementById("texto");
  const input = document.getElementById("input");
  p.innerText = diasDeVida(input.value) + " dia(s)";
});
