let jogadores = ["Neymar", "David Neres", "Messi"]; // Declarando um Array  (arranjos)
console.log(jogadores); // Mostrando no console esse Array

let positionplayer = jogadores.indexOf("David Neres"); // indexOF mostra a posição de um elemento (caso o elemento digítado não exista, retorna -1 )
console.log(positionplayer);

let addplayerfinish = jogadores.push("Cristiano Ronaldo"); // A função  .push serve para adicioonar um elemento no final de um Array
console.log(jogadores); // Mostrando no console o elemento  adicionado

let removeplayerfinish = jogadores.pop(); // .pop remove automaticamente o último elemento  de um Array
console.log(jogadores);

let addplayerstart = jogadores.unshift("Cristiano Roanldo"); // Adiciona um elemento no começo de um  Array
console.log(jogadores);

let removeplayerstart = jogadores.shift(); // Remove o primeiro elemento de um Array
console.log(jogadores);

console.log(jogadores.length); // .length vai retornar o tamanho de um Array (quantos elementos ele possuí)
