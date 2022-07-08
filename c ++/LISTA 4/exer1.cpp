#include<iostream>
#include<conio.h>
using namespace std;

bool minuscula(char letra )
{
	bool retorna;
	retorna = false;
	if(letra >='a' && letra <='z')
	{
	  
	  retorna = true;
	 
	
	}
	return retorna;
	
}

bool  maiuscula(char letra)
{

bool retorna = false;

 if(letra >= 'A' && letra <='Z')
 {
 retorna = true;
  
}
return retorna;
}

bool letra1(char letra )
{
bool retorna = false;


if(letra >= 'a' && letra <='z'  || letra >='A' && letra <='Z'  )
retorna = true;

return retorna;



}


bool vogal(char l)
{
	bool retorna;
	retorna = false;
	
	if( l =='a' || l == 'e' ||  l == 'i' || l =='o' || l =='u' || l =='A' || l == 'E' ||  l == 'I' || l =='O' || l =='U' )
	retorna = true;
	
	return retorna;
	
	
}

bool consoante(char n)
{
	bool retorno = false;
	if   (n == 'B' || n == 'C' || n == 'D' || n == 'F' || n == 'G' || n == 'H' || n == 'J' || 
    n == 'K' || n == 'L' || n == 'M' || n == 'N' || n == 'P' || n == 'Q' || n == 'R' || n == 'S' || n == 'T' || 
    n == 'V' || n == 'W' || n == 'X' || n == 'Y' || n == 'Z' || n == 'b' || n == 'c' || n == 'd' || n == 'f' || n == 'g' || 
    n == 'h' || n == 'j' || n == 'k' || n == 'l' || n == 'm' || n == 'n' || n == 'p' || n == 'q' || n == 'r' || n == 's' || 
    n == 't' || n == 'v' || n == 'w' || n == 'x' || n == 'y' || n == 'z')
    {
    	
    	retorno = true;
    	
	}
	return retorno;
	
	
	
}
bool algarismo(char l )
{
	bool retorno = false;
	if( l =='1' || l =='2' || l =='3' || l =='4' || l =='5' || l =='6' || l =='7' || l =='9'  )
	{
		
		retorno = true;
	}
	
	return retorno;
}


int main()
{
char letra;
cout<<"Digite um caractere \n";
cin>>letra;
if(minuscula(letra))
{
	cout<<"Esse caracter e uma letra minuscula\n";
	
}

if(maiuscula(letra))
{
	cout<<"Esse caracter e uma letra maiuscula\n";
	
}

if(letra1(letra))
{
	
	cout<<"Esse caracter e uma letra\n";
	
}

if(vogal(letra))
{
		cout<<"Esse caracter e uma vogal \n";
	
}
if(consoante(letra))
{
		cout<<"Esse caracter e uma consoante \n";
	
}
if(algarismo(letra))
{
		cout<<"Esse caracter e um algarismo \n";
	
}


getch();



}
