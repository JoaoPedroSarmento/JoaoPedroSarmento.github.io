function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promisse está sendo executada");
        setTimeout(() => {
            console.log("Resolvendo a promisse");
            reject("Promisse foi rejeitada");
        }, 1000 * 2)
    })
}

const p = execute();
p.then((resultado) => {
    console.log(`Resultado final ${resultado}`);
}).catch((erro) => {
    console.log(`A promisse foi rejeitada ${erro}`)
}).finally(() => {
    console.log("A promisse foi finalizada");
})
