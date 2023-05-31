# Laços de repetição 

n = 10 ;

cont = 1 ;

while cont <= n : 
    print ("Valor do contador" , cont) ;
    cont += 1 ; # Ou  utilizar cont = cont + 1 


for i in range(n) :
    print("Valor de i -- > " , i )


for  cont  in range (1, n , 1) :
    print (cont) ;  
    

for cont in range ( 20 , 0 , - 1 ) :
    print (cont);

print ( " J e i  \n")
i =  0 ;
j = 10 ;  
for  i in range ( i , j , 1 ) : 
    print(i) ; 

print ("\n")
estados = ["Rio De janeiro " , "são paulo" ]



for i in estados : 
    print(i)