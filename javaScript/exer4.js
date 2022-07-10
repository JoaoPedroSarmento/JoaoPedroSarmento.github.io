const momentMin = require("./moment.min");

let partida = prompt("Digite a data de partida(formata DD/MM/YYYY) ");

let converte = moment(partida, "DD/MM/YYYY");

let dia = moment();

let diferenca = dia - partida;

let opcao = prompt(
  "Escolha como gostaria de exbir o tempo de  partidan\n 1- segundos\n 2-Minutos\n 3-Horas\n4-dias\n"
);

if (opcao == "1") {
  let segundos = math.round(dia / 1000);
  alert("Tempo de vôo " + segundos + " segundos ");
} else if (opcao == "2") {
  let minutos = math.round(dia / 1000 / 60);
  alert("Tempo de vôo" + minutos + " min[s] ");
} else if (opcao == "3") {
  let horas = math.round(dia / 1000 / 3600);
  alert("Tempo de vôo" + horas + " min[s] ");
} else if (opcao == "4") {
  let dias = math.round(dia / 1000 / 3600 / 24);
  alert("Tempo de vôo" + dias + " dia[s] ");
} else {
  alert("Opação inválida\n");
}
