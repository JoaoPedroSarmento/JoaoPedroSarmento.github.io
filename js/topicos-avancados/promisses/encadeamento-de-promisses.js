// function checarIdade(idade) {
//     return new Promise((resolve, rejeita) => {
//         if (idade) {
//             resolve(idade > 18);
//         } else {
//             rejeita(new Error("Idade é requerida"));
//         }
//     })
// }

// function definiIdade(aniversario) {
//     return new Promise((resolve, rejeita) => {
//         if (aniversario) {
//             const aniversarioAno = new Date(aniversario).getFullYear()
//             const anoAtual = new Date().getFullYear()
//             resolve(anoAtual - aniversarioAno);
//         } else {
//             rejeita(new Error("Aniversário é requerido"));
//         }
//     })
// }


// definiIdade(23).then((idade) => {
//     checarIdade(idade).then((isMaiorDe18) => {
//         if (isMaiorDe18) {
//             console.log("Maior de idade");
//         } else {
//             console.log("Menor de idade")
//         }
//     }).catch((erro) => {
//         console.log(erro.menssage);
//     })
// }).catch((erro) => {
//     console.log(erro.menssage);
// })

// definiIdade("2005-11-23").then(idade => checarIdade(idade)).then((isMaiorDe18) => {
//     if (isMaiorDe18) {
//         console.log("Maior de 18");
//     } else {
//         console.log("Menor de 18");
//     }
// }).catch((erro) => {
//     console.log(erro.message);
// })

// // outros exemplos de programas com promisses
// // programa converter de String para Numero

// function stringParaNumero(texto) {
//     return new Promise((resolve, rejeita) => {
//         if (+texto) {
//             resolve(+texto);
//         } else {
//             rejeita(new Error("Valor digitado não é um número"));
//         }
//     })
// }

// stringParaNumero("texto...").then((resultado) => {
//     console.log(`Valor convertido ${resultado}`);
// }).catch((erro) => {
//     console.log(erro.message)
// })
// stringParaNumero("25").then((resultado) => {
//     console.log(`Valor convertido ${resultado}`);
// }).catch((erro) => {
//     console.log(erro.message)
// })


function soma(a, b) {
    return new Promise((resolvido, rejeitado) => {
        if (typeof a !== "number" || typeof b !== 'number') {
            rejeitado(new Error("valores invalidos"));
        } else {
            resolvido(a + b);
        }
    })
}

soma(3, 2).then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.log(erro.message);
})