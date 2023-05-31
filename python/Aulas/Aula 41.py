def CriaLista() :
    lista = []

    tam = int(input("Insira o tamanho da lista : ")) ;
    
    for i in range (tam) :
        Valor = float(input("Insira um valor -- > ")  );
        lista.append(Valor) ; 

    return lista ; 
def main () : 
    Lista = CriaLista() ; 

    n =  int(input("Insira a quantidade de números que deseja somar  :  ")) ; 

    soma = 0 ; 

    for i in range (len(Lista)) : 
        if i == n : break ; 

        soma = soma + Lista[i] ;
    
    print(f"O valor da soma é  : {soma}"  )  ;  



main(); 