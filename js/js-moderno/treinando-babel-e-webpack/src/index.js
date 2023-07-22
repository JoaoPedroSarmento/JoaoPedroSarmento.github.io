const dayjs = require("dayjs");
console.log(dayjs().format("DD/MM/YYYY"));
const media = (...numeros) => {
    return (numeros.reduce((acum, valor) => acum += valor, 0)) / numeros.length;
}
