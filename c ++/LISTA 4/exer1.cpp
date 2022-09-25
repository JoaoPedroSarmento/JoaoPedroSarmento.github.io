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

int consoante(char l)
{
	int retorno;
     if ( (  l =='a' ) || ( l == 'A')  )  return retorno = 0;
	 else
	 if( ( l == 'e') ||  ( l == 'E'))   return retorno = 0 ;
	 else
	 if( ( l == 'i') ||  ( l == 'I')) return retorno = 0 ;
	 else
	 if( ( l == 'o') ||  ( l == 'O')) return retorno = 0 ;
    else
     if( ( l == 'u') ||  ( l == 'U')) return retorno = 0 ;
     else
     if   ( ( l =='1'  ) || (  l =='2' )  || (  l =='3' )  || ( l =='4' )  || ( l =='5' )  || ( l =='6' )  || ( l =='7' )  || ( l =='9' )   ) return  retorno = 0;
     else
      return retorno = 1; 

	
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
return 0 ;

}

