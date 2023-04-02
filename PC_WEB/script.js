const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");

function soma(n1, n2) {
  return n1 + n2;
}
function maiorNumero(n1, n2) {
  return n1 > n2 ? n1 : n2 > n1 ? n2 : 0;
}

function numPrimo(n) {
  n = Number(n);
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) return false;
  }
  return n > 1;
}
function hipotenusa(n1, n2) {
  n1 = Number(n1);
  n2 = Number(n2);
  let somaDosCatetos = soma(Math.pow(n1, 2), Math.pow(n2, 2));
  return Math.sqrt(somaDosCatetos);
}
function novoSalario(salarioAtual, percentual) {
  return salarioAtual * (1 + percentual / 100);
}

function fahParaCelcius(fah) {
  return ((fah - 32) * 5) / 9;
}
function mediaFinal(nota1, nota2, nota3) {
  return ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10;
}
document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("keypress", (ev) => {
    ev.preventDefault();
    if ((ev.key >= "0" && ev.key <= "9") || ev.key === "." || ev.key === "-") {
      return (input.value += ev.key);
    }
  });
});
document.getElementById("somar").addEventListener("click", () => {
  const resultSum = document.getElementById("resultSum");
  const maiorN = document.getElementById("maiorN");
  console;
  resultSum.textContent = `Resultado da soma: ${soma(
    Number(n1.value),
    Number(n2.value)
  )}`;
  if (resultSum.textContent === "NaN") {
    resultSum.textContent = "Erro";
  }
});

document.getElementById("maiorNumero").addEventListener("click", () => {
  const maiorN = document.getElementById("maiorN");
  maiorN.textContent =
    maiorNumero(Number(n1.value), Number(n2.value)) === 0
      ? "Os números são iguais"
      : `O maior número é: ${maiorNumero(Number(n1.value), Number(n2.value))}`;
});

document.getElementById("numeroPrimo").addEventListener("click", () => {
  const textN1 = document.getElementById("textN1");
  const textN2 = document.getElementById("textN2");
  textN1.textContent = numPrimo(n1.value)
    ? `O número ${n1.value} é primo`
    : `O número ${n1.value} não é primo`;
  textN2.textContent = numPrimo(n2.value)
    ? `O número ${n2.value} é primo`
    : `O número ${n2.value} não é primo`;
});

document.getElementById("calculaHipotenusa").addEventListener("click", () => {
  const preText = document.getElementById("displayHipotenusa");
  preText.textContent = `Valor da hipotenusa de ${n1.value} e ${
    n2.value
  } é: ${hipotenusa(n1.value, n2.value)}`;
});

document.getElementById("newSalario").addEventListener("click", () => {
  const salario = document.getElementById("salario");
  const percentualDeAjuste = document.getElementById("percent");
  const salarioAjustado = document.getElementById("displaySalarioAjustado");
  salarioAjustado.textContent = `Salário com porcentagem: ${novoSalario(
    salario.value,
    percentualDeAjuste.value
  )}`;
});

document.getElementById("fahParaCelcius").addEventListener("click", () => {
  const fah = document.getElementById("fah");
  const preCelcius = document.getElementById("celcius");
  preCelcius.textContent = `Valor de  Fahrenheit: ${
    fah.value
  }, para celcius: ${fahParaCelcius(Number(fah.value))}`;
});

document.getElementById("calcMediaFinal").addEventListener("click" , () => {
  const preMediaFinal = document.getElementById("displayMediaFinal");
  const nota1 = document.getElementById("nota1");
  const nota2 = document.getElementById("nota2");
  const nota3 = document.getElementById("nota3");
  preMediaFinal.textContent = `Média final: ${mediaFinal(Number(nota1.value),Number(nota2.value), Number(nota3.value))}`;
})