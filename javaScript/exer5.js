let ano_luz = prompt("Digite uma distância em anos-luz\n ");
alert(
  "Opções de conversão parsec[pc],unidade   astronônima [au], quilômetros[km] \n\n"
);
let opcao = prompt("Digite uma das seguinte opções [pc] ,  [AU] , [km] :\n");

let pC = ano_luz / 0.306601;
let AU = ano_luz * 63241.1;
let km = ano_luz * (9, 5 * Math.pow(10, 12));

switch (opcao) {
  case "pc":
  case "PC":
  case "Pc":
    alert(
      "O valor convertido  de anos-luz para [pc]   é equivalente a : " + pC
    );
    break;
  case "au":
  case "AU":
    alert(" O valor convertido deanos-luz para [AU] é equivalente a : " + AU);

    break;
  case "km":
  case "KM":
    alert(" O valor convertido deanos-luz para [km] é equivalente a : " + km);

    break;
  default:
    alert(" Unidade não identificada : Conversão fora do escopo \n");
}

if (opcao == "pc" || opcao == "Pc" || opcao == "PC") {
  alert(
    " Distancia em anos-luz escolhida >>>  " +
      ano_luz +
      "  Conversao desejada >> " +
      opcao +
      "  Convertido >> " +
      pC
  );
}

if (opcao == "au" || opcao == "AU") {
  alert(
    " Distancia em anos-luz escolhida >>> " +
      ano_luz +
      "     Conversao desejada >> " +
      opcao +
      "  Convertido >> " +
      AU
  );
}

if (opcao == "km" || opcao == "KM") {
  alert(
    " Distancia em anos-luz escolhida >>> " +
      ano_luz +
      "   Conversao desejada >> " +
      opcao +
      "  Convertido >> " +
      km
  );
} else {
  alert(
    " Distancia em anos-luz escolhida >>> " +
      ano_luz +
      "     Unidade não identificada : Conversão fora do escopo"
  );
}
