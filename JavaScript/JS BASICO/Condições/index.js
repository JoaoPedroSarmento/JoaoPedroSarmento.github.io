// trabalhando com condições 

var idade = 18;


 if ( idade >= 18 )  { 
      console.log("Pode dirigir !!");
 }

 else {
    console.log("Não pode dirigir!!");
 }


 idade = 15 ; 
 
 
 if ( idade >= 18 )  { 
    console.log("Pode dirigir !!");
}

else {
  console.log("Não pode dirigir!!");
}

// Operadores lógicos 

// && ( e ) , || ( ou ) , ! ( não ) 


// Operadores aritméticos 

//  > , < , >= , <=   e == 

// == serve para comparar e = serve para atribuir um valor 

var Velocidade = 120 ; 

 if ( Velocidade < 60  ) {
    console.log("Aumente a velocidade");
 }
 else 
    if ( Velocidade > 60 && Velocidade  < 120  ) {
        console.log("mantenha a velocidade");
    }
 else 
    if( Velocidade >= 120 ) {
        console.log("Diminua a velocidade !!");
    }
 else {
    console.log("Velocidade razoável !!");
 }


 var  num1 = 2 ;

 var  num2 = 3 ;

 var  num3 = 4 ; 

 if ( num1 > num2 || num1 > num3 ) {
    console.log("O primeiro número é maior que um dos dois números ");
 }
 else  
 if( num2 > num1 || num2 > num3 ) {
    console.log("O segundo número é maior que um dos dois números ");
  }
 
 if ( num3 > num1 || num3 > num2 ) {

    console.log("O terceiro número é maior que um dos dois números ");

 }
  x = 2 ; 
  y = 1; 
 var condicao = !( x == y ) ;  // como x não é == a y o retorno será true     ; 
 console.log(condicao);

 x = 2 ; 

 y = 2 ;

 condicao = ! ( x == y ) ; // Como x == y , é true sempre quando o não é verdadeiro seu retorno será falso 

 console.log(condicao);