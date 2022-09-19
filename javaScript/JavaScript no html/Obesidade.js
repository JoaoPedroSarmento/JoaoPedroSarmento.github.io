window.onload = function () {
  const resultado = document.getElementById("comecar");

  resultado.addEventListener("click", Obesidade);
};

function RetornaObesidade() {
  const peso = document.querySelector("#peso");
  const p = peso.value;
  const altura = document.querySelector("#altura");
  const a = altura.value;
  resultado = document.querySelector("#resultado");
  const imc = p / (a * a);
  console.log(imc);
  if (imc < 25) return 0;
  else if (imc >= 25 && imc < 30) return 1;
  else if (imc >= 30 && imc < 35) return 2;
  else if (imc >= 35 && imc < 40) return 3;
  else if (imc >= 40) return 4;
  else return 5;
}

function Obesidade() {
  const peso = document.querySelector("#peso");
  const p = peso.value;
  const altura = document.querySelector("#altura");
  const a = altura.value;
  const imc = p / (a * a);
  switch (RetornaObesidade()) {
    case 0:
      resultado.textContent = "Ausente da obesidade , " + " imc -- > " + imc;
      break;
    case 1:
      resultado.textContent = "Sobrepeso , " + " imc -- > " + imc;
      break;
    case 2:
      resultado.textContent = "Obesidade grau I , " + " imc -- > " + imc;
      break;
    case 3:
      resultado.textContent = "Obesidade grau II , " + " imc -- > " + imc;
      break;
    case 4:
      resultado.textContent = "Gordo pra krlh ( obesidade mórbida ) , " + "imc -- > " + imc;
      break;
    default:
      resultado.textContent = "Valores inválidos";
      break;
  }
}
