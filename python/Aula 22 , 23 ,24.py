cesta = ["banana" , "maça" , ["Uva", "Pera"]] ; 

print("Mostrando os elemento dessa matriz ")

for i in  cesta : 
    print(i)
  
print(len(cesta)) # A função  len verfica o tamanho de uma variável  

nome = "João" ; 

print(len(nome))

print (cesta[2] [0])


#  [0] [1] Pegamos a de banana 

print(cesta[0] [0])

print(cesta[0][1])

i = 0 ; 

tam = len(cesta[0])

print (len(cesta[0]))

i = 0 ; 
j = 0;
while ( i < tam  ) : # Soletrando banana 
    print(cesta [j] [i]) ;
    i+= 1;  # i = i + 1 


i = tam -1  ; 


print("Soletrando bananana inversa \n")
while( i >= 0  ) :
    print(cesta[j] [i] ) ; 
    i-= 1 ;  # i = i - 1



lista = [];

# Acrescentando números na lista 2

tam  = int(input("Deseja inserir quantos números na lista  ? ")) ; 
i = 0; 

while ( i < tam ) :  # i = 0 
    
    n = float(input("Insira o número --  > ") ); # 
    lista.append( n )  ; 
    i += 1  ; 



i = 0 
while(i <= len(lista) -1  ) : 
    print( "Posicao  do número -- > %i  valor do número   -- >  " %( i) , lista[i]) ; 
    i += 1 ;    