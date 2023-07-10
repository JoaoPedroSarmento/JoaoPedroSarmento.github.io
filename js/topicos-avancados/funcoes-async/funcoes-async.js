async function soma(a, b) {
    return a + b;
}
async function subtracao(a, b) {
    return a - b;
}

const resultadoSoma = soma(5, 5);
const resultadoSubtracao = subtracao(5, 2)

Promise.all(([resultadoSoma, resultadoSubtracao])).then((resultados) => {
    console.log(resultados);
}).catch((erro) => {
    console.log(erro)
})