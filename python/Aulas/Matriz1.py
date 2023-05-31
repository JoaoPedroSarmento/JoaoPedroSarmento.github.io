# Matriz 3x3 

M = [[0,0,0] , [0,0,0] ,  [0,0,0]] ; 

# Guardando valores na matriz : 

for i in range (3) :
    for j in range (3) :
        M[i] [j] = float(input("Insira um valor para a linha --  >  %i e coluna %i " %( i , j ))) ; 

print("-" * 25) ; # Irá aparecer 25x -- na tela 
for i in range (3) :
    for j in range (3) :
        print( "  " ,M[i] [j] , end = "\t") ;
    print("\n") ;
print("-" * 25)  ;