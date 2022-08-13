#include<iostream>
#include<conio.h>

using namespace std;

bool numero_primo(int numero)
{
  bool retorno = false;
  int  contador = 0;
 for(int i = 1; i <= numero; i ++ )
 {
 
  if(numero % i == 0 ) contador ++;
  cout<<"Contador : "<<contador<<endl;
 }
 if(contador == 2 ) retorno = true;
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
   
