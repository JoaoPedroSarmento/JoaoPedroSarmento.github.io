var num = prompt ( "Insira um número");
function NumParOuImpar ( num ) {
     if ( num % 2 == 0  )  return  0 ;
     return 1  ;
}


if (!NumParOuImpar(num)) {
     console.log("O número inserido é par"); 
} else {
    console.log ( "O número inserido é ímpar"); 
}