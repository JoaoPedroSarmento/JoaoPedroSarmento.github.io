async function soma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Os argumentos precisam ser do tipo number");
    }
    return a + b;
}

async function execute() {
    try {
        const resultado = await soma(5, null);
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }
}

execute();



async function soma2(...numeros) {
    if (numeros.find((valor) => typeof valor != "number")) {
        return Promise.reject("Um valor inserido não é um número")
    }
    return numeros.reduce((acum, valor) => acum += valor, 0);
}


async function execute2() {
    try {
        // await == aguardem
        const resultado = await soma2(3, 4, 5, 6);
        console.log(resultado);
    } catch (erro) {
        console.log("Deu ruim ");
    }
}
execute2();
// async function execute() {
//     const resultado = await soma(3, 4, 5, 6, 7, 10, "ddd");
//     console.log(resultado);
// }

// execute().then((resultado) => {
//     console.log("Resultado obtido" + resultado);
// }).catch((erro) => {
//     console.log("Ouve um erro")
// })