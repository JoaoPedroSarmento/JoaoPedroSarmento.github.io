async function esperarSegundos(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function execute() {
    console.time("map");
    const numeros = [3, 5, 7, 10];
    // O array "numeros" contém os números que serão processados.

    const quadrado = await Promise.all(numeros.map(async (num) => {
        // O método "map" é chamado no array "numeros", mapeando cada número para uma função assíncrona.
        // O parâmetro "num" representa cada número do array.

        await esperarSegundos(2);
        // A função "esperarSegundos" é chamada com o valor 2, aguardando 2 segundos antes de prosseguir.

        return num * num;
        // O resultado do cálculo do quadrado do número é retornado.
    }));

    console.log(quadrado);
    // O array "quadrado" contém os resultados dos cálculos de quadrado para cada número.

    console.timeEnd("map");
    // É encerrada a contagem do tempo de execução iniciada com "console.time".
}

execute();
// A função "execute" é chamada para iniciar a execução do código.
