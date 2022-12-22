/* Comando switch serve para verificar o valor de uma variável e utilizar as cláusulas case para verificar se um resultado é verdadeiro , se nenhum for utilizamos default */ 
//Sintaxe : 
// switch(verifica variável)
//case a : executa tal coisa e pare
// break - >  break serve para parar 
//default : executa tal coisa e
// Programa : 

let idade = window.prompt("Digite sua idade - > ")
idade = parseInt(idade) // Transformando a string em tipo number 
switch(idade)
  {
    case 1  : 
    case 2  : 
    case 3  :
    case 4  : 
    case 5  : 
    case 6  :
    case 7  : 
    case 8  : 
    case 9  :
    case 10 : 
    case 11 :
    case 12 : 
    case 13 : 
    case 14 :
    case 15 : 
    case 16 : 
    case 17 :
      console.log("Você é menor de idade ")
      break // pare de executar , caso não tenha esse break ele executa até achar um break
         default : console.log("Você é maior de idade ")
      break
  } 