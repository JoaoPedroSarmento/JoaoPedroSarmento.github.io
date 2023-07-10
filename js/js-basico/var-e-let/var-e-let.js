var num1 = 2;
var num1 = 3;
console.log(num1);//3

let num2 = 3;
// let num3 = 2; daria erro, com let não é possível redeclarar uma variávl existente
for (var i = 1; i <= 10; i++);
console.log(i);// 11
for (let j = 1; j <= 10; j++);
// console.log(j) ERRO

if (true) {
    var num1 = 4;
    let num2 = 4;
}
console.log(num1, num2)// 4 , 3 