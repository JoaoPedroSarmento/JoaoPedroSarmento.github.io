var objeto = {}

objeto.Escreva = "Olá , Mundo!";

console.log ( objeto ) ; 

console.log ( objeto.console_log ); 



var log = "log";

console[log] ( "Olá!!!"); // [ buscou o valor do objeto log ]  

var warn = "warn";

console[warn] ("Usando o console.wanr de forma diferente ") ; 

var error = "error" ;  

console[error]  ("usando o console.error de forma diferente") ; 

var pessoa = { 
   nome : "João" , 
   idade : 20    ,
   genero : "Masculino" 
}

console.log ( pessoa ) ; // Irá mostrar no console  o objeto pessoa 

// Caso queira adicionar uma nova propriedade a este objeto basta : 

pessoa.falando = function () {
  console.log ("FALANDO...")
}
console.log ( pessoa )

pessoa.falando(); 


// vetor com objetos 
 
const produtos = [
  {
    nome: 'Camiseta preta',
    preco : 29.99,
    descricao : 'Camiseta preta de algodão macio com estampa branca.',
    imagem  : 'https://example.com/shirt.jpg'
  },
  {
    nome : 'Jeans azul',
    preco : 49.99,
    descricao : 'Jeans azul escuro de corte reto.',
    imagem : 'https://example.com/jeans.jpg'
  },
  {
    nome : 'Tênis branco',
    preco : 79.99,
    descricao : 'Tênis branco confortável com sola de borracha.',
    imagem : 'https://example.com/shoes.jpg'
  }
];


