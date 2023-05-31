# Importando módulo randomico 

import random 

i = 1 
print ( "Usando random para gerar números aleatórios !") ; 
for i   in range (2) : 
    x = random.randrange(1, 10 ) ;  # Valores aleatórios de 1 até 9 
    print(x) ; 


for i in range (10)  :
    x  = random.randint(1 , 10) ;   # Valores aleatórios de 1 até 10 
    print( x ) ; 