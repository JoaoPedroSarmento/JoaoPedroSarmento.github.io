#include <iostream>

using namespace std;

int main()
{
   int par = 0 , impar = 0 ,  i = 1 ;
   int n , r ; 
   
   cout << "Digite um numero -- > ";
   cin  >> n ; 
   
   for(i ; i <= n; i++)
   {
       if(i % 2 == 0 ) par++;
       else
       if(i % 2 != 0 ) impar++;
       if(i == n )
       {
           cout << "Numeros impares -- > " << impar << endl ; 
           cout<< "numeros pares -- > "<< par << endl ;
           cout << "Deseja escrever mais algum numero -- > 1 -  sim , outro valor - nao   ";
           cin >> r ;
           if(r == 1 )
           {
               impar = 0;
               par = 0;
               i = 0;
               cout << "Digite o numero ";
               cin >> n ;
               
           }
       }
   }
}
