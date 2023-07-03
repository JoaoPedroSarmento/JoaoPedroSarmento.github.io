// console.log("Programa iniciado!");
// setTimeout(() => {
//     console.log("3 segundos se passaram desde que o programa foi iniciado!");
// }, 1000 * 3);

// // setInterval(() => {
// //     console.log("Função chamada a cada 2 segundos");
// // }, 1000 * 2);


// // const definindoIntervalo = setInterval(() => {
// //     console.log("4 segundos se passaram desde que o programa foi iniciado!");
// // }, 1000 * 4);
// // clearInterval(definindoIntervalo);

// // console.log(definindoIntervalo);

let segundos = 0;
const intervalId = setInterval(() => {
    if (segundos > 10) {
        clearInterval(intervalId)
    } else {
        console.log(segundos)
        segundos += 1;
    }
}, 1000)