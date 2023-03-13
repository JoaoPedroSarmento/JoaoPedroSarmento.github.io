#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

bool numero_primo(int numero) { 
    for (int i = 2; i <= sqrt(numero); i++)
       if ( numero % i == 0 ) return false;
    return numero > 1;
}

int main()
{
	int numero,resultado;
	cout<<" DIGITE UM NUMERO ---->";
	cin>>numero;
	resultado = numero_primo(numero);
    
	switch(resultado) {
    case true : 
	cout<<numero<<" <---- e um numero primo \n";
    break;
    default : 
   	cout<<numero<<" <---- nao e um numero primo ";
    break;
       
   } 
} 
