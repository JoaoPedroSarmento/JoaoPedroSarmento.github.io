M = [ [0 , 0 , 0 ] ,  [ 0 , 0 , 0  ] , [ 0 , 0 , 0  ] ] ; 

somaValoresPares = 0 ; 

somaTerceiraColuna = 0 ; 
n= 0 ; 
Maior = 0 ; 
for i in range (3) :
    for j in range (3) :
       n   = int(input("Insira um número  "))  ;
       M[i] [j] = n ;  
       if ( n % 2 == 0 ) :
        somaValoresPares = somaValoresPares + n ;  
       if ( j == 2 ) :
        somaTerceiraColuna = somaTerceiraColuna + n ; 
       if ( i == 1 ) :
        if(n > Maior ) :
            Maior = n ; 

print("-" * 25) ; 
for i in range (3) :
    for j in range (3) :
        print( "  " ,M[i] [j] , end = "\t") ;
    print("\n") ;
print("-" * 25)  ;


print ( "A soma dos valores pares é -- > " , somaValoresPares ) ; 

print("A soma dos valores da terceira coluna é -- > " , somaTerceiraColuna ) ; 

print("O maior valor da segunda linha é -- > "  ,  Maior ) ;   