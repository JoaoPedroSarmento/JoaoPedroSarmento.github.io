let jogadores = [
  ["Messi", 766],
  ["Zico", 804],
];
console.log(jogadores[1][0]); // No primeiro parênteses pegou a posição de um array, no segundo pegou a posição de um elemento dentro de um array

let jogadores2 = [
  ["Messi", 766],
  ["Zico", 804, [true, false]],
];
console.log(jogadores2[1]); // Aqui irá mostrar todo o Array
console.log(jogadores2[1][2]); // Aqui pegamos os elementos da posição 2 desse Array
console.log(jogadores2[1][2][0]); // Aqui pegamos o elemento da posição 0 do Array da posição 2, que está dentro de um Array da posição 1
