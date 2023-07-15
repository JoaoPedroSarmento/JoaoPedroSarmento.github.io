function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promise está sendo executada");
        setTimeout(() => {
            console.log("Resolvendo a promise");
            resolve("Resultado");
        }, 1000 * 2)
    })
}

const p = execute();
console.log(p);

setTimeout(() => {
    console.log(p);
}, 1000 * 2);