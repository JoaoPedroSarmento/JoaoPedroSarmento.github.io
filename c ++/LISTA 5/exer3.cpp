#include<iostream>
#include<conio.h>

using namespace std;

bool numero_primo(int numero)
{
  bool retorno = false;
  int  contador = 0;
 for(int i = 1; i <= numero; i ++ )
 {
 
  (numero % i == 0 ) ? contador ++ : contador;

 }
 (contador == 2 ) ? retorno = true : retorno;
 return retorno;
 
}

int main()
{
	int numero,resultado;
	cout<<" DIGITE UM NUMERO ---->";
	cin>>numero;
	resultado = numero_primo(numero);
    
	switch(resultado)
   {
    case true : 
	cout<<numero<<" <---- e um numero primo \n";
    break;
    default : 
   	cout<<numero<<" <---- nao e um numero primo ";
    break;
} 
} 
