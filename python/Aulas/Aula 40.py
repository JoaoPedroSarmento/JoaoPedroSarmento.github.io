# break e continue 

            
# For com break ; 
for i in range (10) :
    if i == 5 :
        break ; 
    print(i) ; 


for i in range (10) :
    if i == 5  : 
        continue;
    print(i) ; 


print ( "Numeros pares de 1 até 10  : ") ;

for i in range (1 , 11 ) :
    if ( i % 2 != 0) : continue ;
    print(i) ; 



print( "Numeros impares de 1 até 10  " ) ; 

for i in range ( 1 , 11 ) :
    if ( i % 2 == 0 ) : continue ;
    print(i) ; 