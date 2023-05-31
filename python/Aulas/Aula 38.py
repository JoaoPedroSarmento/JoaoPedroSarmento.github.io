# Função dentro de função 

def f1 () :
    x= 10 ; 
    def f2() :
        print(x) ;
        
    f2() ;

f1 ();