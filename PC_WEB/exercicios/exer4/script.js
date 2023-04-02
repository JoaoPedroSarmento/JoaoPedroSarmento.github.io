const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
function soma(n1, n2) {
  return n1 + n2;
}
function hipotenusa(n1, n2) {
  n1 = Number(n1);
  n2 = Number(n2);
  let somaDosCatetos = soma(Math.pow(n1, 2), Math.pow(n2, 2));
  return Math.sqrt(somaDosCatetos);
}
document.getElementById("calculaHipotenusa").addEventListener("click", () => {
  const preText = document.getElementById("displayHipotenusa");
  preText.textContent = `Valor da hipotenusa de ${n1.value} e ${
    n2.value
  } é: ${hipotenusa(n1.value, n2.value)}`;
});
