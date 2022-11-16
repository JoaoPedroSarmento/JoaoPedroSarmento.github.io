pedra = 0 ;

papel  = 5 ;

tesoura = 2 ; 

print("**********************\nPEDRA PAPEL E TESOURA \n**********************") ;
print("Instruções  : Pedra = 0 , Papel = 5  e Tesoura = 2 ") ;

mao1 = int(input("Insira a primeira mão --  > ")) ; 

mao2 = int ( input("Insira a segunda mão -- > ")) ;


if mao1 == 5 and mao2 == 0 or mao1 == 2  and mao2 == 5 or mao1 == 0 and mao2 == 2  : 
   print("Vencedor -- > Primeiro jogador ") ;
elif mao2 == 5 and mao1 == 0 or mao2 == 2 and mao1  == 5 or mao2 == 0 and mao1 == 2 : 
    print("Vencedor -- > Segundo jogador ") ;
else :
    print("Valores inválidos !!") ; 
