// criando array 
// formas de criar um Array 
let arrayColchetes = [1, 2, 3, 4, 5];
let arrayNewArray = new Array(1, 2, 3, 4, 5);
let arrayConstructor = Array(1, 2, 3, 4, 5);
console.log(arrayColchetes, arrayNewArray, arrayConstructor);

// mexendo em um Array 

let numeros = [1, 2, "texto"];
// Acessando os valores
// para acessar o primeiro valor (1) é necessário dizer em que posição esse valor está no array
// nesse caso posição 0 (inicial) numeros[0]
console.log(numeros[0], numeros[1], numeros[2]);
//alternando um valor 

numeros[2] = 3;

// mostrando os valores de um Array através do loop
let tamArray = numeros.length;

// proprieade length serve para pegar o tamanho do array (quantos dados esse array está armazenando)
for (let i = 0; i < tamArray; i += 1) {
    console.log(numeros[i]);
}


const nome = "João";
let tamNome = nome.length;
for (let i = 0; i < tamNome; i += 1) {
    console.log(nome[i]);
}

const nomes = ["kaio", "Eduardo", "João"];
for (let i = 0; i < nomes.length; i += 1) {
    for (let j = 0; j < nomes[i].length; j += 1) {
        console.log(nomes[i][j]);
    }
}


// matriz 

const matriz = [[1, 2], [3, 4], [5, 6]]

for (let i = 0; i < 2; i += 1) { // Numeros de linhas 
    for (let j = 0; j < matriz.length; j += 1) { // Número de colunas 
        console.log("Linha: ", i, "Coluna ", j, " valor : ", matriz[j][i])
    }
}

for (let i = 0; i < matriz.length; i += 1) { // Número de colunas 
    for (let j = 0; j < 2; j += 1) { // Numeros de linhas 
        console.log("Linha ", j, " Coluna ", i, " valor : ", matriz[i][j])
    }
}