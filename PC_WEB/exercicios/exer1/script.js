const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");

function soma(n1, n2) {
  return n1 + n2;
}

document.getElementById("somar").addEventListener("click", () => {
    const resultSum = document.getElementById("resultSum");
    resultSum.textContent = `Resultado da soma: ${soma(
      Number(n1.value),
      Number(n2.value)
    )}`;
    if (resultSum.textContent === "NaN") {
      resultSum.textContent = "Erro";
    }
  });