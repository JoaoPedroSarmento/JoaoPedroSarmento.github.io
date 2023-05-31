import random

def NumeroAleatorio () :
    Num = random.randint(1,5);
    return Num ; 

def main () :
    print("tente adivinhar o número aleatório".upper()) ; 
    NumAleatorio = NumeroAleatorio() ; 
    cont = 0 ;
    ganhou = True ; 

    Cont = int(input("Deseja ter quantas chances ? "))
    for i in range (Cont) :
        n = int(input("Insira o número") ) ;

        if n > NumAleatorio :
            print ("Digite um número menor".upper() ) ;
        elif n == NumAleatorio :
            print ( " Você acertou o número gerado aleatóriamente era -- > ".upper() , NumAleatorio ) ; 
            break;
        elif i + 1 ==   Cont :
            print ("você perdeu o número era -- > ".upper() , NumAleatorio ) ;

        else :
            print ( "Digite um número maior".upper()) ; 
        
main (); 
    

