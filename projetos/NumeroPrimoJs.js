window.onload = function () {
  let resultado = document.getElementById("comecar");

  resultado.addEventListener("click", NumeroPrimo);
};

function NumeroPrimo() {
  let cont = 0;
  var n = Number(document.getElementById("numero").value),
    resultado = document.getElementById("resultado");
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) cont++;
    else cont = cont;
  }
  if (cont == 2) {
    resultado.textContent = "O número " + n + " é primo ";
  } else {
    resultado.textContent = "O número " + n + " não é primo ";
  }
}
