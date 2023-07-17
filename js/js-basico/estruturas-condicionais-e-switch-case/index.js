const altura = +(prompt("Insira sua altura")) || null;
const peso = +(prompt("Insira seu peso")) || null;
const imc = peso / (altura * altura);
let tipoDoIMC = null;
console.log(altura, peso)
if (imc < 18.6) {
    tipoDoIMC = 1;
} else if (imc < 25) {
    tipoDoIMC = 2;
} else if (imc < 30) {
    tipoDoIMC = 3;
} else if (imc < 35) {
    tipoDoIMC = 4;
} else if (imc < 40) {
    tipoDoIMC = 5;
} else {
    tipoDoIMC = 6;
}

switch (tipoDoIMC) {
    case 1: tipoDoIMC = "Abaixo do peso";
        break;
    case 2: tipoDoIMC = " Peso ideal";
        break;
    case 3: tipoDoIMC = "Acima do peso";
        break;
    case 4: tipoDoIMC = "Obesidade grau 1";
        break;
    case 5: tipoDoIMC = "Obesidade grau 2";
        break;
    default: tipoDoIMC = "Obesidade mórbida";
}
(altura != null && peso != null) ? console.log(tipoDoIMC, imc) : console.log("Erro");


