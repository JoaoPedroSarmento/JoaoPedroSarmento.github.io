#include<iostream>
#include<conio.h>
using namespace std;


	int main()
{
  int n, cont = 0, cont2 = 0;
 char r; // r  = resposta 
 cout<<"DIGITE UM NUMERO INTEIRO ---> ";
 cin>>n;
 while(n > 0 )
 {
 	
 	if( n % 2 == 0 )
 cont++;
 else
 if( n % 2 != 0 )
 cont2++;
  n--;
 }
   cout<<"programa encerrado\n Numeros pares lidos ---> "<<cont<<"\n Numeros impares lidos ---> "<<cont2;
}
