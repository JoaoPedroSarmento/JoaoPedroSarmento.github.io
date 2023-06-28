const soma = (...num) => num.reduce((acum, num) => acum + num, 0);
console.log(soma(3, 3, 3)); // 9

const nomes = (nome, ...nomes) => [nome, ...nomes];

console.log(nomes("Jaya", "tavin", "Leo", "Xabi"));
