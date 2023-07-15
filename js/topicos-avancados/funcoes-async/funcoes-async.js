async function soma(a, b) {
    return a + b;
}
async function subtracao(a, b) {
    return a - b;
}

const resultadoSoma = soma(5, 5);
const resultadoSubtracao = subtracao(5, 2)

// soma(4, 2).then((resultado) => {
//     console.log(resultado);
// }).catch((erro) => {
//     console.log(erro);
// })
// subtracao((resultado) => {
//     console.log(resultado);
// }).catch((erro) => {
//     console.log(erro);
// })
// facilitando o processo: 
Promise.all(([resultadoSoma, resultadoSubtracao])).then((resultados) => {
    console.log(resultados);
}).catch((erro) => {
    console.log(erro)
})


