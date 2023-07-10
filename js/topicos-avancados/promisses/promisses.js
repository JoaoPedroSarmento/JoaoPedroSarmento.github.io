function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promisse está sendo executada");
        setTimeout(() => {
            console.log("Resolvendo a promisse");
            resolve("Resultado");
        }, 1000 * 2)
    })
}

const p = execute();
console.log(p);

setTimeout(() => {
    console.log(p);
}, 1000 * 2)