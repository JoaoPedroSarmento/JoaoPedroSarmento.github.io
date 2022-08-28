class IMC {
  static ValorDoIMC(peso, altura) {
    return peso / (altura * altura);
  }
}

let peso = prompt("Digite seu peso -- > ");
let altura = prompt("Digite sua altura -- > ");

function ResultadoDoIMC(p, a) {
  let imc = IMC.ValorDoIMC(p, a);

  if (imc < 25) return 1;
  else if (imc >= 25 && imc < 30) return 2;
  else if (imc >= 30 && imc < 35) return 3;
  else if (imc >= 35 && imc < 40) return 4;

  return 5;
}

let Imc = ResultadoDoIMC(peso, altura);

switch (Imc) {
  case 1:
    console.log("AUSENTE\n");
    break;

  case 2:
    console.log("SOBREPESO\n");
    break;

  case 3:
    console.log("Obesidade Grau I\n");
    break;

  case 4:
    console.log("Obesidade Grau II\n");
    break;

  default:
    console.log("Obesidade mórbida\n");
    break;
}
