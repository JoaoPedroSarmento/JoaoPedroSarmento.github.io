// Declarando variáveis e constantes 
//Variáveis servem parar armazenar dados , e podem variar seu valor , não possuem um valor constante (fixo)
// var x let x const , var e let são praticamente a mesma coisa 
// Declarando variáveis 
// Nomes das variáveis : Não podem possuir espaço 
let n = 5 // Tipo number : O tipo number possui todas as representações numéricas, ou seja, números sem e com casas decimais , positivos e negativos. 
console.log(n)

n = -5
console.log(n)

n = -5.3
console.log(n)

n =  5.3
console.log(n)

n = 999999999999999999n // Quando é utilizado o n ao final do número serve para indicar que esse tipo de número é um bigint
// Sendo assim são números grandes inteiros , e que de certa forma não apareceriam nesse caso todos os noves , pois teria um limite de caracteres
// mas o bigint não possui um limite de caracteres .

let verdadeiro = true

console.log(verdadeiro) // true e false são valores booleanos , muitos utilizdos em condicionais ou funções 

let falso = false 

console.log(falso)

let indefinido
console.log(indefinido) // O tipo undefined ou idnefinido é quando uma variável é declarada mas não possui nenhum valor 

let vazio = null
console.log(vazio) // O tipo é vazio quando uma variável não possui valor mas ela tem um espaço na memória quardado , só que vázio .
// Declarando constante , const + nome da variável 
const nome = "João" // Como isso é uma constate caso queira alterar o valor irá impimir mensagem de  erro
console.log(nome) // Essa constante possui o tipo string ( texto ) que é uma cadeia de caracteres , ou seja , um texto . 
// Textos podem ser escritos de 3 formas : 
let Nome = 'joao' // Aspas simples
console.log(Nome)
Nome = "Joao" // Aspas duplas 
console.log(Nome)
Nome = `João` //Apóstrofo
console.log(Nome)
// Extraindo apenas um caractere de uma string : 

console.log(nome[0]) /* O primeiro número SEMPRE está na posição 0 , então esses [] indicam que irei extrair um caractere da posição que será escolhida nesse caso a posição 0 a primária*/