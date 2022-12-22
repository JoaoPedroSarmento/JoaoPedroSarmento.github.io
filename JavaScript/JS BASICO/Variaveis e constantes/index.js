// var =  variável global , ou seja , mesmo que ele seja criado dentro de uma função ele pode ser usado em outras funções 

// let =  variável do escopo
//let só se torna variável global caso não seja criada dentro de uma função 
//caso seja criada dentro de uma função ela será uma variável local , só irá funcionar dentro daquela função 

// Tudo que for uma variável pode ser alterado 

// const = constante 

// tudo que for uma constante não pode ser alterado 

var nome = "Olá mundo" ; 

nome = " João " ; 


{
    let idade = 17 ; // Variável local ( só funciona dentro dessas chaves )

    console.log(idade)
}


let idade2 = 18  ;  // Variável global funciona dentro de qualquer função depois dessa declaração 

console.log(idade2) ; 

{
    console.log(idade2) ; 
}



{
    var Idade = 19 ; // Mesmo que o a variável var seja declarada dentro de uma função ela continua funcionando como uma variavel global ( que pode ser usada fora e dentro de outras funções )
}

  console.log(Idade); 

// Obs : Criar variáveis fora de funções utilize var e criar variaveis dentro de funções utilize o let 

const Nome = "João" ; // Como é constante não pode ser alterado 

// Formas de escrever textos 


var Primeiraforma = "João"  ; // Aspas duplas  

var Segundaforma = 'joão' ; // Aspas simples 

var TerceiraForma = `João` ; // Apóstrofo

// concatenação 


var Conca = "Ele tem   :  " + Idade + " anos " ; 



console.log( Conca )



