// Operadores de comparação
let n =  3
let n2 = 3

let condicao =   n == n2 // Operado == só compara números
console.log(condicao) /* Nesse caso irá retornar true pois fizemos uma comparação , dizemos que n == n2 , então retornou true , pois  3  é igual a 3 caso a gente compare uma string que possua o mesmo valor irá retorna true , já no === retorna falso */

n = 3 
n2 = "3"

condicao = n == n2 
console.log(condicao)

let n3 = 3
let n4 = "3"
let condicao2 = n3 === n4 // Nesse operador irá retorna falso pois ele não transforma uma string em número , já o outro transforma 

console.log(condicao2)

let x = 3 
let y = 4

let condicao3 = x != y // irá dar true pois x não é igual a y 
console.log(condicao3)

x = 3 
y = "3"

condicao3 = x != y // Nesse caso podemos comparar uma string com um number , com isso irá dar false , pois x é igual a y,  3 = 3 
console.log(condicao3)

x = 3 
y = "3"
condicao3 = x !== y
console.log(condicao3) // Nesse caso não  podemos comparar a string com um number e com isso sempre irá dar true mesmo que o número seja igual , como nesse caso , true pois x não é igual a y ( verdadeiro )

// Maior que 

x =  3
y = 4 

condicao = x > y // caso x seja maior que quatro vai retornar true 
console.log(condicao)
// Menor que 
condicao = y < x  // caso y seja menor que x irá retornar true 

// Maior ou igual

condicao = x >= y // Caso x seja maior ou igual a y irá retorna true

// Menor ou igual

condicao = y <= x // Caso y seja menor ou igual a x retorna true 

// Operadores lógicos 
// E (And) = && , Retorna true quando todas as condições forem verdadeiras 
x = 3
y = 2 

condicao = x > y && x !== y // Se x for maior que y E x não for igual a y , irá retornar true 
console.log(condicao)
// Ou (or) = || , Retorna true quando pelo menos uma condição for verdadeira
condicao = x < y || x > y // X não é menor  que y , mas é maior que y , com isso irá retornar verdadeiro , pois uma condição é verdadeira
console.log(condicao)
// Not , quando uma condição for verdadeira o retorno será falso , se for falso o retorno será verdadeiro 

condicao = x != y // x não é igual a y , isso é verdade , então o retorno é true , caso x fosse igual a y o retorno seria false
 console.log(condicao)

 condicao =  !( x = y  ) ; 
 console.log(condicao);