#include<iostream>
#include<conio.h>

using namespace std;

bool numero_primo(int numero)
{
  bool retorno = false;
	int i = 0;
   	int contador = 0;
	    while(i < numero )
	{
   	i ++; 
	if(numero % i == 0 )
	contador ++;
    } 
	if(contador == 2 ) retorno = true; // cont = 2 pois um n�mero primo � divisivel apenas por um e por ele mesmo 

	return retorno;
	/* cont = contador , contador funciona da seguinte forma  o primeiro valor que divisivel pelo seu numero resta 0 � o 1 
	depois o �ltimo que ir� restar 0 ser� o pr�prio n�mero digitado pelo usu�rio */
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
   
