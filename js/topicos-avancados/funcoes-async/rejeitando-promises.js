async function soma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Os argumentos precisam ser do tipo number");
    }
    return a + b;
}
async function subtracao(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return Promise.reject("Os argumentos precisam ser do tipo number");
    }
    return a - b;
}

const resultadoSoma = soma(5, 5);
const resultadoSubtracao = subtracao(5, null)

Promise.all(([resultadoSoma, resultadoSubtracao])).then((resultados) => {
    console.log(resultados);
}).catch((erro) => {
    console.log(erro)
})