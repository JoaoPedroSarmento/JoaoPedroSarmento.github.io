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