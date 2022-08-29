#include<iostream>
#include<conio.h>
using namespace std;

int minuscula(char l)
{
	int retorno;
  (l >= 'a' && l <= 'z' ) ? retorno = 1  : retorno = 0; 
	
	return retorno;
}

int maiuscula(char l)
{
	int retorno;
 (l >= 'A' && l <= 'Z' ) ? retorno = 1  : retorno = 0; 
	return retorno;
	
}
int letra (char l)
{
	int retorno;
	 (l >='A' && l <='Z' || l >='a' && l <='z' ) ? retorno = 1 : retorno =   0 ;
	return retorno;
	
}


int vogal(char l)
{
	int retorno;
    ( ( l =='a' )  || ( l  == 'e' )  ||  ( l == 'i' )  || ( l =='o' )  || ( l =='u' )  || ( l =='A' )  || ( l == 'E' )  || ( l == 'I')  || (l =='O') 
	|| (l =='U' )  ) ? retorno = 1 : retorno = 0;
	return retorno;
	
}

int consoante(char n)
{
	int retorno;
    (n == 'B' || n == 'C' || n == 'D' || n == 'F' || n == 'G' || n == 'H' || n == 'J' || 
    n == 'K' || n == 'L' || n == 'M' || n == 'N' || n == 'P' || n == 'Q' || n == 'R' || n == 'S' || n == 'T' || 
    n == 'V' || n == 'W' || n == 'X' || n == 'Y' || n == 'Z' || n == 'b' || n == 'c' || n == 'd' || n == 'f' || n == 'g' || 
    n == 'h' || n == 'j' || n == 'k' || n == 'l' || n == 'm' || n == 'n' || n == 'p' || n == 'q' || n == 'r' || n == 's' || 
    n == 't' || n == 'v' || n == 'w' || n == 'x' || n == 'y' || n == 'z')  ? retorno = 1 : retorno = 0 ;
    
	return retorno;
	
}


int algarismo(char l)
{
	int retorno;
     (  l =='1' || l =='2' || l =='3' || l =='4' || l =='5' || l =='6' || l =='7' || l =='9'  ) ? retorno = 1 : retorno = 0;
	return retorno;
	
}

int main()
{
	int t;
char carac;
cout<<"Digite um caractere \n";
cin>>carac;
(minuscula(carac)) ?  cout<<"Esse caractere e uma letra minuscula\n" : cout<<"";	

(maiuscula(carac)) ? cout<<"Esse caractere e uma letra maiuscula\n" : cout<<"";

(letra(carac)) ? cout<<"Esse caractere e uma letra\n" : cout<<"";

	
(vogal(carac)) ? cout<<"Esse caractere e uma vogal \n" : cout<<"";

	
(consoante(carac)) ? cout<<"Esse caractere e uma consoante \n" : cout<<"";

	
(algarismo(carac)) ? cout<<"Esse caractere e um algarismo \n" : cout<<"";

getch();

}
