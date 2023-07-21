const array1 = [1, 2, 3, 4, 5];
const array2 = array1.slice();

array1.push(6);
console.log(array1, array2);

const idades = [0, 4, 9, 16, 22, 2];

function maiorDeDezoito(valor, indice, Array) {
    return valor >= 18;
}
const idade = idades.find(maiorDeDezoito);
if (idade) {
    console.log("Você tem  " + idade + " anos");;
} else {
    console.log("Você não tem 18 anos ")
}

const nomes = [`João`, `Maria`, `Ricardo`];
const elementoDoMeio = nomes.find(function (nome, indice, Array) {
    return indice == parseInt((Array.length - 1) / 2);
})

console.log(elementoDoMeio); // Maria 