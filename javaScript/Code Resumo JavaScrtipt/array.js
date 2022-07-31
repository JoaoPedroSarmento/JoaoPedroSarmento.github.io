let jogadores = ["Neymar", "David Neres", "Messi"]; // Declarando um Array  (arranjos)
console.log(jogadores); // Mostrando no console esse Array

let positionplayer = jogadores.indexOf("David Neres"); // indexOF mostra a posição de um elemento (caso o elemento digítado não exista, retorna -1 )
console.log(positionplayer);

let addplayerfinish = jogadores.push("Cristiano Ronaldo"); // A função  .push serve para adicioonar um elemento no final de um Array
console.log(jogadores); // Mostrando no console o elemento  adicionado

let removeplayerfinish = jogadores.pop(); // .pop remove automaticamente o último elemento  de um Array
console.log(jogadores);

let addplayerstart = jogadores.unshift("Cristiano Ronaldo"); // Adiciona um elemento no começo de um  Array
console.log(jogadores);

let removeplayerstart = jogadores.shift(); // Remove o primeiro elemento de um Array
console.log(jogadores);
console.log(jogadores.length); // Mostra o tamanho de um Array

let players = [
  ["Messi", 766],
  ["Zico", 804],
];
console.log(players);
console.log(players[1][0]); // No primeiro parênteses pegou a posição de um array, no segundo pegou a posição de um elemento dentro de um array

console.log(players[1][0]); // No primeiro parênteses pegou a posição de um array, no segundo pegou a posição de um elemento dentro de um array

let jogadores2 = [
  ["Messi", 766],
  ["Zico", 804, [true, false]],
];
console.log(jogadores2[1]); // Aqui irá mostrar todo o Array
console.log(jogadores2[1][2]); // Aqui pegamos os elementos da posição 2 desse Array
console.log(jogadores2[1][2][0]); // Aqui pegamos o elemento da posição 0 do Array da posição 2, que está dentro de um Array da posição 1
