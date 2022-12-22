console.clear(); // Serve para limpar o console

// Caso queira limpar algo dentro do console basta utilizar clear()

console.log("Olá mundo !");

console.warn("AVISO!! ");

window.alert("ALERTA"); // Pode ser window.alert ou apenas alert  ( alerta )

var nome = window.prompt("Insira seu nome "); // Caixa que armazenas dados

console.log(nome);

var idade = 13;

var nome = "Kaio";
/*   
Template string : Permite que você coloque comando javascript dentro do próprio texto ,
dessa forma é possível de uma forma mais prática mostrar variáveis sem precisar fazer a concatenação no console .
*/

 console.log(` Nome da pessoa ${nome} idade : ${idade} `)  

 document.write ( ` <p>  Usando javaScript  </p> ` ) ; // Irá aparecer no documento HTML  
 document.write ( ` <p>    Olá    ${nome}     </p> `  ) ; // Dessa forma é possível utilizar código javascript 
 document.writeln ( " <p> Olá  </p>") ; // Dessa forma não é possível  


 var Num = Number( window.prompt ( "Insira um número -- > ")); // Irá transformar a string em número , caso o usuário não insira um número o valor armazenado será NaN ( not a number )
 console.log( Num ); 

 typeof Num // Para ver o tipo de uma variável ou um elemento basta escrever typeof  + elemento 
 
