let time = {
  Nome: "Barcelona", // Nome e Idade são propriedades que possuem valores
  Idade: 122,
};

console.log(time); // Mostrando o object time  no console
console.log(time.Nome); // Mostrando no console  a propriedade Nome que está dentro do object time
console.log(time.Idade); // Mostrando no console  a propriedade Idade que está dentro do object time
console.log(time["Nome"]); // Outra forma de buscar uma propriedade do object e mostrar no console
console.log(time["Idade"]); // Outra forma de buscar uma propriedade do object e mostrar no console

// Formas de declarar propriedades, só que fora do object :

time.maior_jogador = "Messi"; // Adicionamos fora do object uma propriedade
console.log(time); // Mostrando essa nova prorpiedade

time["Segundo maior jogador"] = "Ronaldinho Gaúcho";

console.log(time);

let time2 = new Object(); // Object vázio
console.log(time2);

time2.nome = "Real Madrid"; // Adicionando propriedade a este objects
time2["Cor da Camisa "] = "Branca"; // Adicionando propriedade a este objects
console.log(time2);
