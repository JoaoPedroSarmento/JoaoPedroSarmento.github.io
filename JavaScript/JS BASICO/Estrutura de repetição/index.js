// Laços de repetição 


// While 

var i = 1 ;
 
while ( i <= 10  ) {
    console.log(i);
    i = i + 1 ;  
}


// For 

for ( let i = 1 ; i <= 10 ; i = i + 1 ) {
    console.log(i);
}
  
// Do while 
 i = 1 ;
do {
    console.log(i)
    i = i + 1 ;     
}
while( i <= 10 );


// ForEach 

var VetorNum = [ 12 , 14 , 20 ] ; 

VetorNum.forEach(function ( valor , indice ) {
    console.log("Valor " + valor + " posição " + indice  ); // Valor é uma variável criada que server para indicar o valor , o indice serve para indicar a posicção do valor 
})

