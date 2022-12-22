// If e else , se e se não
let idade = window.prompt("Digite sua idade -- > ")
if( idade >= 18  ) // Se tal condição for verdadeira executa o que estiver entre as chaves
  {
    console.log(" Você é maior de idade   ")
  }
else // Utilizado para caso nenhuma condição seja verdadeira 
  {
    console.log("Você é menor de idade ")
  }

// if e else if , não é recomendavel ficar usando muitos ifs para um código mais limpo utilize else if  : 

let num1  = window.prompt("Digite o primeiro  número  ")

let num2 = window.prompt("Digite o segundo  número")

let num3 = window.prompt("Digite o terceiro número ")
// Usando if , else if e else 

if(num1 > num2 && num2 >= num3 || num2 < num3 && num3 < num1) // Se 
  {
    console.log(num1 + " e o maior número ")
  }
else // Caso contrário se 
  if(num2 > num1 && num1 >= num3 || num1 < num3 && num3 < num2)
    {
      console.log(num2 + " e o maior número ")
    } 
  else //Caso contrário ou se não 
    {
      console.log(num3 + " e o maior número ")
    }

// utilizando o operador ternário 

let anoDeNascimento = window.prompt("Digite o ano em que você nasceu -- > ")

anoDeNascimento = (anoDeNascimento >= 2004 ) ? "Você é maior de idade"  : " você  é menor de idade "
console.log(anoDeNascimento)
// Operador ternário : variável = (condição) ? se for verdade executa tal coisa : se não for verdade executa isso