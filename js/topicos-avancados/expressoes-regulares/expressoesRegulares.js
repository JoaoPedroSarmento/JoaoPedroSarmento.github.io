class NumeroDeTelefone {
  constructor(numeroString) {
    // tirando os espaços e letras no número
    numeroString = numeroString.replace(/[\sa-z]/gi, "");
    // olhar para trás e verificar onde tem o + depois em seguida só pode ter números
    // e irá adicionar no minímo um número e no máximo três
    // pegar a posição 0 do array
    this.codigoDoPais = numeroString.match(/(?<=\+)\d{1,3}/)[0];
    // olhar para trás e verificar se há "(" em seguida pegar todos os números e seguida
    // pegar a posição 0 do array
    this.ddd = numeroString.match(/(?<=\()\d+/i)[0];
    // olhar para trás e verificar se há ")" pegar um caractere qualquer e continuar pegando qualquer outro caractere
    // pegar a posição 0 do array para poder pegar a string
    // posteriormente verificar se há "-" na string e trocar por um espaço em branco
    this.numero = numeroString.match(/(?<=\)).+/)[0].replace(/-/, "");
  }
}

const telefone = new NumeroDeTelefone("+55 (22) 99999saada-81231");
console.log(telefone.codigoDoPais, telefone.ddd, telefone.numero);

//  treinando expressoes regulares;

let str = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Totam dolores eveniet, soluta illo dignissimos nulla et voluptate optio odit
harum mollitia ratione doloribus quo a iste quibusdam sunt. Cum non mollitia
neque nihil voluptatum reiciendis sit quisquam impedit iste voluptas.`;
// encontrando a primeira letra a minúscula
console.log(str.match(/a/));
// encontrando a primeira letra A maiúscula
console.log(str.match(/A/)); // null (não foi encontrado)
// encontrando todas as letras "a" minúsculas
console.log(str.match(/a/g));
// encontrando tudo que for espaço
console.log(str.match(/\s/g));
// encontrando tudo que não for espaço
console.log(str.match(/\S/g));
// encontrando todas as letras de a até z  maiúsculas e minúsculas
console.log(str.match(/[a-z]/gi));
//encontrando tudo que for número
console.log(str.match(/\d/g)); // não há números então retorna null
// encontra tudo que não for número
console.log(str.match(/\D/g));
// Encontra caracteres que não são especiais
console.log(str.match(/\w/g));
// encontra caracteres especiais
console.log(str.match(/\W/g));
// encontra a primeira  letra "a" e pega mais um caractere que vier depois dela
console.log(str.match(/a./));
// Pega todas  as letras "l" que vierem em pares
console.log(str.match(/l{2,2}/g));

let numero = "+55 (21) 99999-99999";
// pega o código do país
// 1: Olhar para trás e verificar se na string há um +
// 2: Se houver vai pegar apenas números e irá pegar no mínimo um número e no máximo 3 números
console.log(numero.match(/(?<=\+)\d{1,3}/));
// pegar o ddd
// Olhar para trás e verificar se há um "("
// pegar todos os números em sequência
console.log(numero.match(/(?<=\()\d+/));
// tirar todas as letras e espaços e substituir por nada
console.log(numero.replace(/[a-z\s]/gi, ""));
// mostrando o array sem a flag global
console.log("aaaom".match(/a/));
// mostrando o array com a flag global
console.log("aaaom".match(/a/g));
