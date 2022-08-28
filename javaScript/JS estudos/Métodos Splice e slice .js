let jogadores = ["Messi ", " Neymar ", "Cristiano ronaldo "];

let removedjogadores = jogadores.splice(
  1,
  2,
  "David Neres",
  "Vini"
); /* Excluiu os elementos da posição 1 e 2 , os seguintes elementos foram respectivamente para posição 1 e o outro para 2 */

console.log(removedjogadores); // irá aparecer os jogadores excluídos
console.log(jogadores); // irá aparecer o novo Array

let remove = jogadores.splice(1, 2); // Removeu os elementos da posição 1 e 2
console.log(remove); // Irá aprecer os elementos removidos
console.log(jogadores); // irá aparecer o elemento que não foi removido

let times_ = ["Psg", "Barça", "Real"];
let removetimes_ = times_.splice(1, 1);
console.log(removetimes_);
console.log(times_);

let novostimes = ["chelsea", "City", "United", "Liverpool"];
let extrair_ = novostimes.slice(1, 3);
console.log(novostimes); // Mostrou todos os elementos
console.log(extrair_); // Excluiu os elementos da posição 1 e 3
