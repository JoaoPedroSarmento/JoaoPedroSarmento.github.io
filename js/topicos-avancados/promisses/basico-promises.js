let p = new Promise(() => {
})

console.log(p); // pendente 

// resolvendo uma promisse

p = new Promise((resolve) => {
    resolve("Promise resolvida!");
})

console.log(p); // promise resolvida

// rejeitando uma promise

// p = new Promise((resolve, rejeita) => {
//         rejeita("Promise rejeitada!");
//     })
// irá causar erro no código porque a promise foi rejeitada

// resolvendo o erro 


// trantando erros: 
p = new Promise((resolve, rejeita) => {
    if (true) {
        rejeita("Deu ruim!");
    } else {
        resolve("Deu bom");
    }
})
p.then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.log(erro);
})