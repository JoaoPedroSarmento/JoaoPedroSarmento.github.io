// Operadores aritiméticos 
// Soma 
let n = 1 + 1 
console.log(n)
// Subtração 
n = 1 -1 
console.log(n)
// Multilicação 
n = 2 * 2 
console.log(n)
// Divisão 
n = 6/2
console.log(n)
// Resto da divisão 
n = 10 % 3 // Nesse caso pega o resto da divisão de 10 por 3 que é 1 
console.log(n)

// Agrupamento com parênteses 
n = (5 + 5 ) * 2 
console.log(n)

// Atribuição 
//  Atribuindo valor utilizamos -- > = 
let nome =  12
// Valor de atribuição com soma
let a = 5
console.log(a)
a += 5
// Acima estamos dizendo que a = a + 5 , com isso atribuimos um novo valor a variável a 
console.log(a)
// Atribuição com subtração 
a -= 3 
// a = a - 3 
console.log(a)

// Atribuição com multiplicação 

a *= 2 
// a = a * 2 
console.log(a)

// Atribuição com divisão 

a /= 7
// a = a / 7 
console.log(a)

// Atribuição com resto da divisão 

a %= 2
// a = a % 2 

console.log(a)


// incrementar 

a++
console.log(a)

// Incrimentear 
++a
console.log(a)


// Decrementar 

a--
console.log(a)
// Decrementar 
--a
console.log(a)

// Diferença de incrementar ++ 
let x = 1
let y = ++x // Y possui o valor de x atualizado , acontece que primerio soma 1 + x e ai x = 2 e y = x 
console.log( "O valor de y e " + y )
x = 1 
y = 0
y = x++ // Y não possui o valor de x atualizado  , acontece que primeiro y = x , ou seja , y = 1 , e depois que x = 2
console.log( "O valor de y e " + y )
console.log(x)

// Operações com textos 
//Concatenação de string : Juntar uma strin com a outra 

let nomes = "Joao " + " Maria"
console.log(nomes)