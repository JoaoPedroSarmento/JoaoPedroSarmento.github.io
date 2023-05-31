# Criando funções em python

def soma (num1, num2 ) :
    ValorTotal = num1 + num2 ; 
    return ValorTotal ;


num1 = float(input("Insira  o primeiro  número  -- > ")) ;

num2 = float (input("Insira o segundo número -- > " )) ;

ResultadoDaSoma = soma(num1,num2) ; 


print("O resultado da soma entre " , num1 , "  e " , num2 , "  é -- >  " ,  ResultadoDaSoma  )  ;   


num1 = float(input("Insira  o primeiro  número  -- > ")) ;

num2 = float (input("Insira o segundo número -- > " )) ;

def MDC (n1 , n2 ) :
    if ( n1 % n2 == 0 ) :
        return n2;
    else :
        return MDC(n2 , n1 % n2 ) ; 



mdc  = MDC( num1,num2 ) ; 

print ( "O mdc entre " , num1 , " e " , num2 , " é -- > " , mdc ) ; 



def Operacoes (num1 , num2) :
    soma = num1 +  num2 ; 
    multp = num1 * num2 ;

    return soma , multp ;  # Retornando dois valores 


soma , mult = Operacoes(num1 , num2 ) ;

print("Valor da soma -- >  " , soma ) ; 

print ( "Valor da multiplicação --  > " ,  mult ) ;

# Função com multiplos argumentos

def Soma (*lista) :
    resultado = 0 ;  

    for i in lista :
        resultado = resultado + i ;

    return resultado ; 


print("Valor da soma é -- > " , Soma(1,2,3,4,5,6,7,8,9,10)) ; 


x = 10 ; 


def Decrementa () :

     global x ; 
    
     y = x ; 
    
     for i in range (y) :
        x -= i ; 
        print(x) ; 


Decrementa() ; 


"""  
 FUNÇÃO DECREMENTAA : 
 1 RODADA  - y = -0  , x =  10 - 0
 2 RODADA  - y = -1  , x =  10 - 1 
 3 RODADA  - y = -2 ,  x =  9  - 2 
 4 RODADA  - y = -3 ,  x =  7  - 3
 5 RODADA  - y = -4 ,  x =  4  - 4
 6 RODADA  - y = -5 ,  x =  0  - 5
 7 RODADA  - y = -6 ,  x = -5  - 6
 8 RODADA  - y = -7 ,  x = -11 - 7
 9 RODADA  - y = -8 ,  x = -18 - 8
 10 RODADA - y = -9 ,  x = -26 - 9 
  Valor final de x -- > -35

 """