let arrayStr: Array<string> = ["joão"];
let tupla: [string, string, string] = ["", "", ""];
tupla[0] = "Arnaldo";
tupla[1] = "Osmar";
tupla[2] = "Jardel";
// tupla[3] = "Thaís"; erro

let point: [number, number];
point = [2, 5];

let [x, y] = point;

console.log(x, y, point);

let dynamicArray: [number, boolean, string] = [77, true, tupla[1]];
console.log(dynamicArray);

dynamicArray.forEach((valor) => {
    console.log(valor);
})
