// Criando um vetor 


// Primeira forma de declarar um vetor 

var nomes = [ "João" , "Guilherme" , "Felipe" ]  // Tamanho = 3 , pois possue 3 nomes 

console.log(nomes[0]) ; // A primeira posição é 0 então irá aparecer João 

console.log(nomes[1]);

console.log(nomes[2]);

// Segunda forma de declarar um array 

var nomes2 = new Array (   "João "   , "Guilherme" , "Felipe" ) ; 

console.log(nomes2) ; 


// Armazenadno valores em outras posições de um vetor 


nomes[3] = "Kaio" ;  // Nomes na posição 3 será igual a Kaio

console.log(nomes) ; 


// Função push adiciona um elemento para a última posição de um vetor 

nomes.push("Mario"); 

console.log(nomes[4]); // Mostrando o elemento que foi adicionado ao final 

// Função unshift adicina um elemento ao começo de um vetor 

nomes.unshift("Lopes") ;

console.log(nomes[0]); // Mostrando o elemneto que foi adicionando ao começo 

var NomeRemovido = nomes.pop() // Remove o último elemento do vetor 

console.log( "O nome removido foi -- > " , NomeRemovido); // Mostrando o nome que foi removido 


NomeRemovido = nomes.shift() ; // Remove o primeiro elemento de um vetor 

console.log("O nome removido foi " + NomeRemovido);


// Includes 

var VerificaExistencia =  nomes.includes("Lopes") ; 

// A função includes Irá verificar se o Elemento existe no vetor ou na string , se existir irá retorna true , se não o retorno será falso 



console.log(VerificaExistencia) ;


var Notas  = [  [ "João " , 80  ] ,  [ "Maria" , 70  ]  , [ "Carlos " , 60 ]   ];

// Concatenação entre vetores 

Notas = Notas.concat( Notas , nomes ) ; // Dessa foram é possível concatenar um vetor com outro vetor 


// Reverse , split ,  e Join 
var numeros = [ 1 ,2 , 3 ,4 , 5 ]

// 5 , 4 , 3 , 2 , 1 

var frase = "O rato roeu a roupa do rei de Roma";

frase = frase.split(" ") ;  
console.log ( frase ) // retorna ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"]

frase.reverse()

console.log ( frase ) 


frase = frase.join(" ")
console.log ( frase )
 

// Método ForEach 

Notas.forEach ( function ( valor , indice )  { // Método ForEach é um método de percorrer um vetor de uma forma mais fácil 
    console.log( valor );
} ) 




// Método slice 

var Compras =  [ "banana" , "Arroz" , "Feijão" , "Macarrão" , "carne"] ;

Compras = Compras.slice (  0 , 2 ) ; 
/*
 O vetor Compras irá guardar valores da posição 0 até os valores da posição  1 
 pois todos os elementos que estiverem na posição dois  e nas demais posições serão excluídos

*/

console.log(Compras);

 

Compras = Compras.slice(0) ; // Caso possua um valor , nesse caso o método slicer  adciona o elemento   da posição 0 até as demais posições  

/* 
Reprsentação artual do vetor compras :  Compras = [ "Banana" , "arroz"] ; 
Obs : O último elemento de uma lista do javaScript pode ser entendido como -1 , o penultimo ( que pode ser o primeiro )
como -2 e assim por diante   Então nesse caso "banana " é referente a posição -2 e "Arroz" é referente a posição -1 ( posição final de um vetor ) ; 
Por exemplo compras =  [ " Banana " , "Arroz " , "Feijão "] 
a posição zero   é referente a banana então será adicionado ao vetor da posição zero até a útlima posição 
( nesse caso até a posição 2 que é referente ao Arroz  )
*/

console.log(Compras);


Compras = Compras.slice(-1) ; 

/* 

-1 em um vetor no javaScript é referente a última posição do vetor , então só será armazenado o último valor desse vetorn em compras 
o último valor é referente a "    "


*/

Compras = ["Banana" , "maça"] ; 



console.log(Compras);



// Método splice 

// Substituição dos elementos 

Compras =  [ "banana" , "Arroz" , "Feijão" , "Macarrão" , "carne"] ;


var Excluidos = Compras.splice (1)  // Caso tenha um valor a partir deste valor e adiante os elementos serão excluídos 


console.log(Excluidos); // Mostrando os elementos excluídos da lista 

console.log(Compras); // Mostrando o  elemento que sobrou 
 

Compras =  [ "banana" , "Arroz" , "Feijão" , "Macarrão" , "carne"] ;

Excluidos = Compras.splice ( 1 , 3 ) ; // A partir do elemento da posição 1 serão excluídos três     elementos 

console.log( " Elementos excluídos " + Excluidos); // Mostrando elementos excluídos 

console.log(Compras); // Mostrando os elementos que sobraram 

Excluidos = []; 
Compras =  [ "banana" , "Arroz" , "Feijão" , "Macarrão" , "carne"] ; 

Excluidos = Compras.splice ( 1 , 1 , "Pão") /*
O primeiro  valor equivale a partir de qual elemento será excluído , o segundo valor equivale a quantidade de elementos que serção excluídos
a partir da posição escolhida anteriormente , e o terceiro valor equivale a qual valor os elementos  ou o elemento será substituído 
 */
console.log(Compras);

var Matriz  = [    [  1  , 2 ] , [ 3  , 4 ] , [ 5 , 6 ]  ]  

for ( let i  = 0 ; i < Matriz.length ; i++ )  { // Número de colunas 
  for ( let j = 0 ; j < 2 ; j++ ) { // Numeros de linhas 
    console.log ( `Linha ${j} , Coluna ${i} valor : ${Matriz [i] [j]}`)
  } 
} 




for ( let i  = 0 ; i < 2 ; i++ )  { // Numeros de linhas 
  for ( let j = 0 ; j < Matriz.length ; j++ ) { // Número de colunas 
    console.log ( `Linha ${i} , Coluna ${j} valor : ${Matriz [j] [i]}`)
  } 
}  



// Vetor com strings 

var Nome = "Antony" ; 

console.log ( Nome [0]) // Mostrando no console a primeira letra da string 
console.log ( Nome [1]) // Segunda letra 

// Para soletrar de uma forma mais fácil : 

for ( let i = 0 ; i < Nome.length ; i += 1) { 
   console.log ( Nome [i] ) ; 
}

// Soletrando o nome inverso 

for ( let i = Nome.length - 1  ; i  >= 0  ; i--  ) 
    console.log ( Nome [i])


// Soletrando apenas as letras maiúsculas do nome 

for ( let i = 0 ; i < Nome.length ; i++ ) {
    if ( Nome [i] == Nome[i].toUpperCase() ) 
      console.log ( Nome[i]);
}


// Soletrando apenas as letras minúsculas do nome 

for ( let i = 0 ; i < Nome.length ; i++ ) {
  if ( Nome [i] == Nome[i].toLowerCase() ) 
    console.log ( Nome[i]) ; 
}

console.log ( "\n\n\n\n")

// Mais sobre  slice 

var frutas = [ "Banana" , "Laranja" , "Limão" , "Maçã" , "Manga" ] ;

var citrus = frutas.slice ( 1 ,  3 )  

console.log ( citrus )


var  ElemFruits = frutas.slice ( 1 ) ; 
console.log ( ElemFruits )

var UltimoElem = frutas.slice ( -1 ) ; 

console.log ( UltimoElem)

citrus = frutas.slice ( -4 , -2  )

console.log ( citrus ) ; 

frutas = [ "banana" ] 
console.log ( frutas.slice ( -1 )) 

// Mais sobre o splice  

frutas = ["Banana" , "Laranja" , "Arroz" , "Feijão"] ;

frutas.splice ( 2 , 1 , "Limão" , "Maçã" ) ; 

console.log ( "ola "  + frutas ) ; 

frutas = ["Banana" , "Laranja" ] ;

frutas.splice (  2 , 0 , "Maça" ,  "Limão" , "Manga"); 
console.log ( frutas )

frutas = ["Banana" , "laranja" ] ; 

frutas.splice( -1 , 1 , "Limão") ; 

console.log ( frutas )