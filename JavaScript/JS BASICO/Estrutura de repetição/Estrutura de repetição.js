// Estrutura de repetição com while :
let nome = "joão"
let i = 0 
while(i < nome.length ) // Enquanto i for menor ou igual a 5 executa isso : 
  {
    console.log(nome[i])
    i++ // variável de controle , caso não tenha uma variável de controle o progrma ficará em looping infinito  
  }
// Usando for   : for(variável de controle ; condição ; ação da variável de controle)

// Do while 

nome = "KaKá"
i = 0 
do // Faça alguma coisa , enquanto a condição for verdadeira 
  {
 
    console.log(nome[i])
    i++
  }
while(i < nome.length) // Enquanto isso for verdadeiro executa o do 


// For 
nome = window.prompt("Digite seu nome -- > ")
// length vê o tamanho de uma string 
for(let NomeInverso = nome.length -1; NomeInverso <= nome.length; NomeInverso--)
  {
     if(NomeInverso < 0 ) break
    console.log(nome[NomeInverso])
   
  }