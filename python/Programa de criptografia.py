tamMax = 26 ; 
def RecebeModo () :
    
    while True : 
         modo = input("Você deseja criptografar ou descriptografar\n").lower();
         if modo in  'criptografar c decriptografar d'.split() :
            return modo ;
         else :
            print("Entre 'Criptografar ' ou 'c' ou 'descriptografar' ou 'd' \n") ; 



def RecebeChave () : 
    global tamMax ;

    chave = 0 ;

    while True :
        chave = int ( input("Entre com o número da chave %s " %(tamMax))) ; 
        if  1 <= chave  <= tamMax :
            return chave  ; 


def GeraMsgTraduzida (modo , mensagem , chave ) : 
    if modo[0]  == 'd' :
      chave *= - 1 ; 
    traduzido = '' ; 
    for i in mensagem :
        if i.isalpha() :
            
             num = ord(i) ; 
             num += chave ; 
            
        elif i.isupper() :
                if num > ord('Z') :
                   num -= 26 ;
                elif num < ord('A') :
                    num += 26 ; 
                    
            
        elif i.islower() :
               if num > ord('z') :
                num -= 26 ;
               elif num < ord('a') :
                num += 26 ; 
            
        else :

           traduzido += i ;    
        
        traduzido += chr(num) ;               
    return traduzido ; 


def main() : 

    modo = RecebeModo() ; 

    mensagem = input("Entre com a sua mensagem \n ") ;
    chave = RecebeChave(); 
    print("Seu texto traduzido é  :  "  ) ;
    print(GeraMsgTraduzida(modo,mensagem,chave) ); 
  

main(); 