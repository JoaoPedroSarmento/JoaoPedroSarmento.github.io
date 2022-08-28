let time = {
  nome: "Real Madrid",
  Chanpions: 13,
  Idade: " 120 anos",
  Barcelona: { time: "Barcelona" },
}; // Declarando um object, Propridade : elementos

let time2 = ["Barcelona", 5, " 120 anos ", ["Real madrid", 13, "120 anos "]]; // Declarando um Arrays : elementos

console.log(time.nome); // Mostrando no console  o elemento da propriedade nome
console.log(time2[0]); // Mostrando no console o elemento da posição 0
console.log(time.Barcelona); // Mostrando no console um  object criado dentro de um object
console.log(time2[3]); // Pegando o elemento que nesse caso é um outro Array da posição 3
console.log(time2[3][0]); // Pegadno um elemento apenas do Array que está na posição 3
