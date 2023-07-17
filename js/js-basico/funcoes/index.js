function saudacao(nome) {
    console.log("Olá me chamo" + nome);
}
function soma(a, b) {
    return a + b;
}
function retornaMaiorNumero(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 0;
    }
}

const dadosPlayers = [
    { nomeDojogador: "Black444", id: 455 },
    { nomeDojogador: "Cerol", id: 455 },
    { nomeDojogador: "Fellen", id: 457 },
    { nomeDojogador: "Cerol", id: 458 },
    { nomeDoJogador: "Level Up", id: 458 }
];

const ids = dadosPlayers.reduce(function (valorAcumulado, valor) {
    if (valorAcumulado[valor.id]) {
        valorAcumulado[valor.id].push(valor); // Se um id for igual ele será armazenado no mesmo objeto 
    } else {
        valorAcumulado[valor.id] = [valor]; // Se um id não for igual 
    }
    return valorAcumulado;
}, {})

console.log(ids)


let nomes = ["Ana", "Ana", "John", "Abigail", "Ana"];

const nomesUnicos = nomes.reduce((function (acumulado, nome) {
    // se o nome atual não existir no array acumulado, adicionamos ele ao array
    if (!acumulado.includes(nome)) {
        acumulado.push(nome);
    }
    // retornamos o array acumulado atualizado
    return acumulado;
}, []));

console.log(nomesUnicos); // imprime ["Ana", "John", "Abigail"]


nomes = ["Pedro", "Gabriel", "João", "Santana"];
nomes.sort(function (a, b) {
    return b.length - a.length;
})

console.log(nomes)

nomes = ["João", "Ana"]

nomes.sort();

console.log(nomes) // nomes ficaram em ordem 


let numeros = [1, 9, 3, 4, 6, 10, 5, 7, 8, 2]

numeros.sort(function (a, b) { // Ordem decrescente 
    return (b > a) ? 1 : (a > b) ? - 1 : 0;
})

console.log(numeros);


let Objeto = Object()
console.log(Objeto)

let lista = Array();
console.log(lista);

let num = 3;
console.log(num)
num = String(num);  // Dessa forma o número foi transformado em string 

console.log(num);




