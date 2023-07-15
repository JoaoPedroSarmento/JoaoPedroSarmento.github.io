function soma(a, b) {
    return new Promise((resolvido, rejeitado) => {
        if (typeof a !== "number" || typeof b !== 'number') {
            rejeitado(new Error("valores invalidos"));
        } else {
            resolvido(a + b);
        }
    })
}

function subtracao(a, b) {
    return new Promise((resolvido, rejeitado) => {
        if (typeof a !== "number" || typeof b !== 'number') {
            rejeitado(new Error("valores invalidos"));
        } else {
            resolvido(a - b);
        }
    })
}
const resultadoSoma = soma(3, 2);
// const resultadoSubtracao = subtracao(5, null);
const resultadoSubtracao = subtracao(5, 2);
Promise.all([resultadoSoma, resultadoSubtracao]).then((resultados) => {
    console.log(resultados);
}).catch((erro) => {
    console.log(erro.message);
})

function numeroAoQuadrado(x) {
    return new Promise((resolvido, rejeitado) => {
        if (typeof x !== "number") {
            rejeitado(new Error("Valor inválido"));
        } else {
            resolvido(x * x);
        }
    })
}

const numeros = [3, 5, 7, 10];
Promise.all(numeros.map((num) => numeroAoQuadrado(num))).then((resultados) => {
    console.log(resultados);
}).catch((erro) => {
    console.log(erro);
})