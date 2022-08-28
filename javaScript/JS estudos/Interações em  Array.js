let times = ["Barça ", "Vâlencia", " Real Madrid ", ""];
times.forEach(function (times, indice) {
  /* Criamos uma função essa função recebe dois parâmetros, o primeiro recebe os elementos de um  Array, o outro recebe o indice ou a posição de cada elemento */ console.log(
    "time : " + times + "\nIndice : " + indice
  );
});

let _times2 = times.map(function (parametro_times, indice) {
  let retorno =
    "Time em maiúsculo : " +
    parametro_times.toUpperCase() +
    " indice : " +
    indice +
    " "; // toUppercase retorna todos os caracteres em maiscúlo
  return retorno;
});

console.log(_times2);

let with7carac = times.filter((Element) => {
  return Element.length >= 7;
}); // Irá retorna os elementos que atendem a essa condição
console.log(with7carac); // Mostrando os elementos que retornaram
console.log(times);

let with7carac2 = times.find((Element) => {
  return Element.length >= 7;
}); // Irá retornar o primeiro elemento que atender a condição
console.log(with7carac2); // Mostrando os elementos que retornaram
