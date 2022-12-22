// Criando um array
const listaDeCompras = ["açucar",false]
console.log(listaDeCompras)
listaDeCompras[0] = "Arroz" 
listaDeCompras[1] = "Feijão"
listaDeCompras[2] = 7
listaDeCompras[3] = "batata"
console.log(listaDeCompras)


//Adicionando elementos no Array 
// Push : Adiciona um elemento ao final de um array 

const compras = listaDeCompras
compras.push("Abacaxi")
console.log(compras)
// unshift  Adiciona um elemento ao começo de um Array
compras.unshift("Banana")
console.log(compras)

// Removendo elementos 
// pop Remove o útlimo elemento de um Array
const UltimoElemento = compras.pop()
console.log(compras)
console.log(UltimoElemento)

// Shift remove o primeiro elemento de um Array
const PrimeiroElemento = compras.shift()
console.log(compras)
console.log(PrimeiroElemento)

//Pesquisar por um Elemento 
// Includesserva para verificar se tal elemento existe em um Array , retorno booleano ( true ou false )
let inclui = compras.includes("Abacaxi")
console.log(inclui)

let compras2 = ["Macarrão" , "Arroz"]

let indice =   compras2.indexOf("Banana")
console.log(indice) // Irá retornar -1 pois esse elemento não existe dentro do Array 

compras2[2] = "Banana"
indice = compras2.indexOf("Banana")
console.log(indice) // Agora irá retornar o índice/posição desse elemento no Array , que no caso é 2 

// Cortar e concatenar 
// Slice  -- > cria uma cópia de uma parte do Array 

let compras3 = compras2.slice(0,2) /* Para pegar os elementos é necessário dizer  sua  posição inicial até a posição final , o último elemento será excluído , nesse caso pega elementos da posição 0 até a posição 2 , ou seja : 0 , 1 , 2 e o útlimo elemento é excluído , como o último elemento é da posição dois então o da posição dois será excluído*/
console.log(compras3)

compras3 = compras2.slice (0,3)
console.log(compras3)

compras3 = compras2.slice(-1) // Assim é posivel pegar apenas o útimo elemento
console.log(compras3)

compras3 = compras2.slice(-3) //Assim será posível pegar do último até o primeiro
console.log(compras3)

//concat 
// concat serve para concater um Array com o outro 
let compras4 = compras3.concat(compras2, "Biscoito")
console.log(compras4)

// Substituição dos elementos 
// splice 
let substitui =  compras4.splice(compras3, 3 , "Palmito","Azeitona" , "Azeite") /* Tirando os três primeiros elementos do Array compras3 e acrescenando outros 3 */
console.log(substitui)
console.log(compras4)

// Iterar com os Arrays

for(indice = 0 ; indice < compras4.length ; indice = indice + 1 )
  {
      console.log("O produto -- > " + compras4[indice] + " está na posição -   > " + indice + " do indíce ")
  }


