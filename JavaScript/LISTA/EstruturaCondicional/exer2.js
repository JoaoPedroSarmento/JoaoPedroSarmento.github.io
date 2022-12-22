var num  = prompt ("Insira um número"); 

function RetornaTipoDoNum ( num ) {
      if ( num >= 1 )  return 1 ; 
      else if ( num < 0 ) return -1 ; 
      return 0 ; 
}

if ( RetornaTipoDoNum ( num ) == 1 ) {
     console.log ( "O número inserido é positivo "); 
}

else if ( RetornaTipoDoNum(num) == -1  ) {
    console.log ( "O número digitado é negativo");
}

else {
    console.log ( "O número digitado é zero")
}