# FUnções com lambda 

# Sem lambda 
def soma (x , y , z  ) :
    return x + y + z ; 

ResultadoDaSoma = soma ( 1, 2 ,3 ) ; 

print(ResultadoDaSoma) ;    

# Com lambda 
x = 2;
y = 3 ; 
z = 4 ; 

ResultadoDaSoma =  ( lambda x , y , z   : x + y + z   ) ; 

print(ResultadoDaSoma(x, y , z ) ) ; 



         