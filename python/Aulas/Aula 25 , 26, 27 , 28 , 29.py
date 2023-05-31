"""   
alunos = int(input("Insira a  quantidade de alunos -- > ")) ;

media =  [] ;
nomes = []
auxN = []
notas = 0 ; 
Removido = ""

for i in range ( 0 , alunos ) :
    n = input("Insira o nome do aluno (a) -- > " );
    nomes.append(n) ; 
    auxN.append(n)
    notas = 0 ; 
    for j in range (1 , 5 ) :
        notas += float(input("Insira a %i nota , do %i aluno " %(j  , i + 1 )));
        if  ( j + 1 == 5 ) :
             notas /= 4 ;
             media.append(notas) ; # Adicionando um valor em um vetor    
       
      
 
for i in range( 0 , alunos) :
        print(  nomes[i] ,  "  média -- > , " ,  media[i]  ) ; 
        



r = input("Deseja remover algum aluno  ? ")

cont = 1;
if r == 's' or r == "sim" or r == "Sim" :
    for i in nomes :
        print( cont ,  "  aluno , nome -- > " , i) ; 
        cont += 1 ; 
    
    Remove = int(input("Insira o numero de qual deseja remover ! ")) ; 
    auxN.remove(nomes[Remove - 1 ]) ; # .remove() serve para remover algo de uma variável 

"""
# Removendo Numeros 


lista = []

n = int(input("Deseja inserir quantos números ? ") ) ; 

for i in range (n) :
    Numero = float(input("Insira o número -- > ")) ; 
    lista.append(Numero) ; 


# Removendo números iguais 

for i in lista :
    Remove = lista.count(i) ; 
    for j in range (1 , Remove ) : 
        print("Numero repetido -- > " , i); 
        lista.remove(i) ;  






print(lista) ; 