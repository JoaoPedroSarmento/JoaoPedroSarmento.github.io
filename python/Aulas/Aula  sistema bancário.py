contas = [] 

depositos = []

def main () :
    opcao = 4 ; 
    
    while opcao != 0   : 
        if   opcao == 1  :
          CriarConta() ;
        elif opcao == 2  :
            VerSaldo() ;
        opcao = int(input("Deseja ver ou criar a conta (1) - criar conta  , (2) ver saldo da conta  , sair (0)  "))



def CriarConta () :
    global contas , depositos , saldo    ;
    
    deposito =  0 ; 

    num_conta = int(input("Insira o número da conta -- > " ) ) ; 

    while num_conta in contas : 
        print("Conta já existente " )
        num_conta =  int(input("Insira o número da conta ")) ;
    contas.append (num_conta ) ;  
    
    deposito = float(input("Insira o valor do  depósito -- > " ) )  ;

    while deposito <= 0 :
        print("Valor inválido !! ") ; 
        deposito = float(input("Insira o valor do depósito")) ; 
    depositos.append(deposito)
    
       
def VerSaldo() :

    
    Num = 0 ; 
    j  =  0 ; 

    def VerificaConta () :
        global contas ; 
        j = 0 ; 
        for i in contas :
           j = j + 1 ;
      
        if j == 0 :
          return False ;
        return True ;

    if VerificaConta() == False  :
        print("Sua conta não existe ! " ) ; 
    

    else : 
     Nconta = int(input("Insira o número da sua conta -- >  ")) ;
     for i in contas :
        if Nconta == i :
            break  ;  
        Num = Num +  1 ;  
      
    for i in depositos : 
        if j == Num :
            print("O saldo do banco é -- > "  , i ) ;
            break;
        j+=1 
                
main(); 