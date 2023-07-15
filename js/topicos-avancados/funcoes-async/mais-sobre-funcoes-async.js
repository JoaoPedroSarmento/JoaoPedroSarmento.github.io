async function soma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        Promise.reject(new Error("Erro, valor(es) invalido(s)"));
    }
    return a + b;
}

soma(3, 2).then(resultado => {
    console.log(`Resultado ${resultado}`);
    return resultado;
}).then(resultado => { // dessa forma é possível pegar o resultado retornado no then anterior e assim é possível ir encadeando vários then
    console.log(resultado);
}).catch(erro => {
    console.log(erro.message);
})