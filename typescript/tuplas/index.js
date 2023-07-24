var arrayStr = ["joão"];
var tupla = ["", "", ""];
tupla[0] = "Arnaldo";
tupla[1] = "Osmar";
tupla[2] = "Jardel";
// tupla[3] = "Thaís"; erro
var point;
point = [2, 5];
var x = point[0], y = point[1];
console.log(x, y, point);
var dynamicArray = [77, true, tupla[1]];
console.log(dynamicArray);
dynamicArray.forEach(function (valor) {
    console.log(valor);
});
