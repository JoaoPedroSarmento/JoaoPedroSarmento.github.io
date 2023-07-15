var a = 2;
var a = 3;
console.log(a);//3

let b = 3;
// let num3 = 2; daria erro, com let não é possível redeclarar uma variávl existente
for (var i = 1; i <= 10; i++);
console.log(i);// 11
for (let j = 1; j <= 10; j++);
// console.log(j) ERRO

if (true) {
    var a = 4;
    let b = 4;
}
console.log(a, b)// 4 , 3 
