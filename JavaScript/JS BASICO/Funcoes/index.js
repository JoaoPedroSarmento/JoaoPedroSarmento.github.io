// Funções

Teste1(); // Posso chamar a função antes de ser criada pois após ela ser criada ela sempre ficará no topo do código

// Forma tradicional de declarar funções

function Teste1() {
  // executado quando chamar a função

  console.log("Chamando a função !!!");
}

Teste1();

function RecebeNome(nome) {
  console.log("Seu nome é :  " + nome);
}

RecebeNome("João");

function RetornaNome() {
  return "Rodrigo"; // Ao retornar algo uma função para de ser executada
}

var nome = RetornaNome(); // Guardei o valor de uma função em uma variável

console.log(nome);

function SomaValores() {
  return 2 + 1; // Return é utilizado para retornar o valor de uma função
}
var soma =
  SomaValores; /* Dessa forma a variável soma é equivalente a função SomaValores  e não ao resultado da função , pois a função SomaValores  não foi executada */

console.log(
  "RETORNO " + soma()
); /* Dessa forma estamos executando  e mostrando o valor da variável soma  que é equivalente a função SomaValores  */

// segunda forma de declarar função

var RecebeNum = function () {
  // Função anônima
  return 1;
};

console.log(RecebeNum);

var Num = RecebeNum();

console.log(Num);

function RetornaMaiorNumero(x, y) {
  if (x > y) return x;
  else if (y > x) return y;
  return 0;
}
var x = 3,
  y = 2;
var Resultado = RetornaMaiorNumero(x, y);

if (Resultado == 0) console.log("OS números são iguais ");
else console.log(" O maior número é -- > " + Resultado);
/*
var qtd = window.prompt(" Quantos números deseja digitar  ? ");
function RetornaMaior_E_MenorNumero(quantidade) {
  let maior = window.prompt(" Insira o  número ");
  let menor = maior;
  let num;
  for (let i = 1; i < quantidade; i = i + 1) {
    num = window.prompt(" Insira o  número ");
    if (num > maior) maior = num;
    if (menor > num) menor = num;
  }
  console.log("  O maior número entre os digitados é --  > " + maior);
  console.log("  O menor número entre os digitados é --  > " + menor);
}
if (qtd >= 2) RetornaMaior_E_MenorNumero(qtd);
*/
// Terceira forma de declarara funções
// Função anônima
(function () {
  console.log("Olá mundo !");
})();

var num1 = 4,
  num2 = 5;
var Resultado = function (num1, num2) {
  return num1 + num2;
}; // Função  anônima não foi executada

console.log(Resultado); // Mostrando que Resultado equivale a função anônima

console.log(Resultado(num1, num2)); // Mostrando o valor da função  anônima

var subtrair = function (a, b) {
  return a - b;
};
console.log(subtrair(3, 1));

// Funções que recebem outras funções como parâmetros

var ListaN = [1, 2, 3, 4, 5];

// ForEach é uma High-Oder Function

ListaN.forEach(function (valor, indice, listaN) {
  // Valor , posição , vetor
  console.log(valor);
});

console.log("\n\n\n");

ListaN.forEach(function (valor, indice) {
  // é possível não dizer o 3 valor que seria referente a lista
  console.log(valor);
});

// High-Oder Functions
// Funções que recebem outras funções como parâmetros

function Calcular(x, y, Resultado) {
  console.log("SOMA ENTRE DOIS VALORES ");

  let resultado = Resultado(x, y);

  return resultado;
}

function Soma(x, y) {
  return x + y;
}

var soma = Calcular(2, 4, Soma);

var Subtracao = Calcular(8, 4, function (x, y) {
  // Função anônima
  return x - y;
});

console.log(soma);

console.log(Subtracao);

var lista = ["Banana", "Laranja", "Morango", "Maça"];

lista.forEach(function (valor, indice) {
  console.log(valor + " " + indice + "  " + lista);
});

function ExibeElementos(valor, indice, lista) {
  console.log(valor + " " + indice + " " + lista);
}

lista.forEach(ExibeElementos);




// Map

var Nomes = [" João ", " Eduardo ", " Ricardo "];

var Dados = Nomes.map(function (valor, indice) {
  return Nomes[indice]; // Dessa forma é possível armazenar valores em outro  vetor de forma mais rápida
});

console.log(Dados);

const paises = [
  "Brasil",
  "Coreia",
  "Argentina",
  "Espanha",
  "Alemanhã",
  "Estados Unidos",
  "Portugal",
];

// Caso queira armazenar esses dados em um outro vetor basta criar o vetor e utilizar a função Map

var NewPaises = paises.map(function (valor, indice) {
  return paises[indice];
});

console.log(NewPaises);

// Caso queira pegar dados específicos de um objeto basta fazer isto :

const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { raca: "Orc" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

var InformacoesDosPersonagens = personagens.map(function (valor, indice) {
  return personagens[indice].nome; // Dessa forma é possível paçar informações específicas do vetor apenas utilizando a função map
});

console.log(InformacoesDosPersonagens);

// Filter

const Personagens = [
  ["CR7", "Escudo Tunado"],
  ["Dj Alok ", "  Som na Caixa"],
  ["Wukong  ", " Camuflagem"],
];

const p = Personagens.filter(function (valor, indice) {
  return valor[indice] === "CR7"; // Dessa forma o vetor irá filtrar os outros vetores e só irá amazenar em  um  único vetor 
});

console.log(p);


var Dados =  [ 
  { nome : "João" , idade : 24  } , 
  { nome : "Glaucio" } , 
  { idade : 27} 
]

var ArmazenaIdade = Dados.filter ( function ( Elemento ) {
  
       return valor.nome && valor.idade ; 
})


console.log ( ArmazenaIdade ); 


// Reduce

const nivelTotal = personagens.reduce(function (ValorAcumulado, personagens) {
  return ValorAcumulado + personagens.nivel;
}, 0); // 0 é declarado o valor inicial do valorAcumulado

console.log(nivelTotal); // Valor acumulado  , soma de todos os níveis

const Racas = personagens.reduce(function (valorAcumulado, valor) {
  console.log(valorAcumulado);
  if (valorAcumulado[valor.raca]) {
    // Verifica se existe uma raça adicionada ao valorAcumulado
    valorAcumulado[valor.raca].push(valor);
  } else {
    valorAcumulado[valor.raca] = [valor];
  }
  return valorAcumulado;
}, {});

console.log(Racas);

const DadosPlayers = [
  { NomeDojogador: "Black444", id:  455   },
  { NomeDojogador: "Cerol", id:   456   },
  { NomeDojogador: "Fellen", id:   457   },
  { NomeDojogador : "Cerol" , id :  458 }
];

const NomesDosJogadores = DadosPlayers.reduce ( function ( ValorAcumulado , Nome) {
     
        if ( ValorAcumulado [Nome.NomeDojogador]) {
            ValorAcumulado [ Nome.NomeDojogador].push  ( Nome ) ;// Se um nomes for igual ele será armazenado no mesmo objeto 
        } else {
            ValorAcumulado [Nome.NomeDojogador] = [Nome] ;
        }

        return ValorAcumulado ; 
 
} , { })

console.log ( NomesDosJogadores)

const Ids = DadosPlayers.reduce ( function ( ValorAcumulado , valor) {
     
    if ( ValorAcumulado [valor.id]) {
        ValorAcumulado [ valor.id].push  ( valor  ) ; // Se um id for igual ele será armazenado no mesmo objeto 
    } else {
        ValorAcumulado [valor.id] = [valor] ;
    }

    return ValorAcumulado ; 

} , { }) 

console.log ( Ids )

// Sort 

var Nomes = [ "Pedro" , "Gabriel" ,"João" , "Santana" ] ; 
// Pedro = 5 
// Gabriel = 7 
// João = 4 
// Santana = 7 
// Ordem = João , Pedro , Gabriel , Santana 
var NomesOrdenados = Nomes.slice().sort ( function ( a , b ) {
     return a.length - b.length ; 
})

console.log ( Nomes )
console.log ( NomesOrdenados)

var NomesDecrescente = Nomes.slice().sort ( function ( a , b ) {
     return b.length - a.length ; 
})

console.log ( NomesDecrescente ) 

var Nomes = [ "João" , "Ana" ]

Nomes.sort () ;

console.log ( Nomes ) // Nomes ficaram em ordem 


Nomes = [ " João" , "Ana"] ; 

// Outra forma de utilizar o método sort 

var Valores = [ 1 , 9 , 3 , 4 , 6  , 10 , 5 , 7 , 8 , 2  ]

Valores.sort ( function ( a , b ) { // Ordem crescente 
  return ( b > a ) ? -1 : ( a  > b ) ? 1 : 0 ;   
}) 

console.log ( Valores ) ;


// Arrow functions 



