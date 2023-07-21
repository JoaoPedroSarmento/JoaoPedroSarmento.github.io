const media = (...numeros) => {
    return (numeros.reduce((acum, valor) => acum += valor, 0)) / numeros.length;
}

console.log(media(90, 60, 70));
