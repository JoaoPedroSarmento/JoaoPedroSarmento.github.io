function somaValores(num1: number, num2: number, num3?: number) {
    return (num3) ? num1 + num2 + num3 : num1 + num2;
}

console.log(somaValores(2, 3));
console.log(somaValores(2, 3, 4));