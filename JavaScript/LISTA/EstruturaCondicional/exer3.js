var num1 = parseFloat ( prompt("Primeiro número -- > ") ); 
var num2 = parseFloat ( prompt ("Segundo número -- > ")  );  
var num3 = parseFloat (  prompt ("Terceiro número -- > ") );

function MaiorNumEntreDoisNumeros ( num1 , num2 ) {
    if ( num1  > num2 ) return num1 ;
    return num2 ; 
}

function MaiorNumero ( num3  )  { 
    return  ( MaiorNumEntreDoisNumeros ( num1 , num2 ) > num3  ) ?  MaiorNumEntreDoisNumeros ( num1 , num2 )  : num3 ; 
}

console.log ( MaiorNumero ( num3 )) ; 