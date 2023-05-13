const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
function maiorNumero(n1, n2) {
    return n1 > n2 ? n1 : n2 > n1 ? n2 : 0;
  }
document.getElementById("maiorNumero").addEventListener("click", () => {
    const maiorN = document.getElementById("maiorN");
    maiorN.textContent =
      maiorNumero(Number(n1.value), Number(n2.value)) === 0
        ? "Os números são iguais"
        : `O maior número é: ${maiorNumero(Number(n1.value), Number(n2.value))}`;
  });
  