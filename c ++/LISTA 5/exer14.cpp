#include<iostream>
#include<conio.h>
using namespace std;


int main()
{
 int n, cont = 0, cont2 = 0;
 char r; // r  = resposta
 cout<<"DIGITE UM NUMERO INTEIRO ---> ";
 cin>>n;
 if( n % 2 == 0 )
 cont++;
 else
 if(n % 2 != 0 )
 cont2++;
 
 
 cout<<"Deseja digitar mais um numero ? ";
 cin>>r;
 while(  r != 's')
 {
 cout<<"Programa encerrado\n" ;
 break;
}
 if(r == 's')
 {
  while( n  >= 0  )
{
	 cout<<"DIGITE UM NUMERO INTEIRO ---> ";
      cin>>n;
      if( n % 2 == 0 )
       cont++;
       else
        if( n % 2 != 0 )
        cont2++;
      else
      {
	  
       cout<<"programa encerrado\n Numeros pares lidos ---> "<<cont<<"\n Numeros impares lidos ---> "<<cont2;
       break;
       }
	 cout<<"Deseja digitar mais um numero ? ";
       cin>>r;
	if( r != 's')
 {
 cout<<"programa encerrado\n Numeros pares lidos ---> "<<cont<<"\n Numeros impares lidos ---> "<<cont2;
 break;
 }
	
 } 
 
 
}
 
 else
 if( r != 's')
 {
 cout<<"programa encerrado\n Numeros pares lidos ---> "<<cont<<"\n Numeros impares lidos ---> "<<cont2;
  
}
 getch();
}
