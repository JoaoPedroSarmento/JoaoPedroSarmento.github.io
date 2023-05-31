#Comparadores e testes  condicionais 
""""
idade = int(input("Digite sua idade -- > ") ) ;

resp = idade >= 18;



if resp == True : 
     print("Você já pode dirigir ") ;

if resp == False : 
    print ("Você não pode dirigir " ) ; 

    # Outra forma de fazer 

    idade2 = int(input("Digite sua idade -- > ") ) ;

if idade2 >= 18 : 
      print ("Você pode dirigir ") ;
else  : 
      print ("Você não pode dirigir " ) ; 

# Maior entre dois números inteiros 

x = int(input("Insira o primeiro número -- >  "));
y = int (input("Insira o segundo número")) ;

if x > y : 
     print ("O maior número é -- > " , x ) ;
else :
     print ("o maior número é -- > " , y ) ;   



idade  = int(input("Insira sua idade -- > ") ) ;

if idade >= 20 :
     if idade <= 60 :
          print("Idade entre 20 e 60 anos " );

else : 
     print("Idade não está entre 20 e 60 " );
      """

semana = int (input("Digite um número qualquer")) ;

if semana == 1 : 
     print("Domingo") ; 
elif semana == 2 :
     print("Segunda") ;
elif semana == 3 :
     print("Terça") ;
elif semana == 4 :
     print("Quarta") ;  
elif semana == 5 :
     print("Quinta") ;
elif semana == 6 :
     print("Sexta") ;
elif semana == 7 : 
     print ("Sábado") ;
else :
     print ("Valor inválido ") ;
