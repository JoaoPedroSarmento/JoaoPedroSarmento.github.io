#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

void  minuscula(char letra)
{

 if(letra >= 'a' && letra <='z')
 {
 cout<<"Essa letra e minuscula\n";

 }
}
 
void  maiuscula(char letra)
{

 if(letra >= 'A' && letra <='Z')
 {
 
 cout<<"Essa letra e maiuscula\n";
}
 
}


void let(char letra)
{

 if(letra >= 'a' && letra <='z'  || letra >='A' && letra <='Z'  )
 {
 cout<<"Esse caractere e uma letra \n";

 }





}


void vogal(char l)
{
	if( l =='a' || l == 'e' ||  l == 'i' || l =='o' || l =='u')	
	
	{
	cout<<"Essa letra e uma vogal\n ";
	}



	
}


void consoante(char n)
{
	
  if   (n == 'B' || n == 'C' || n == 'D' || n == 'F' || n == 'G' || n == 'H' || n == 'J' || 
    n == 'K' || n == 'L' || n == 'M' || n == 'N' || n == 'P' || n == 'Q' || n == 'R' || n == 'S' || n == 'T' || 
    n == 'V' || n == 'W' || n == 'X' || n == 'Y' || n == 'Z' || n == 'b' || n == 'c' || n == 'd' || n == 'f' || n == 'g' || 
    n == 'h' || n == 'j' || n == 'k' || n == 'l' || n == 'm' || n == 'n' || n == 'p' || n == 'q' || n == 'r' || n == 's' || 
    n == 't' || n == 'v' || n == 'w' || n == 'x' || n == 'y' || n == 'z')
    {
        cout << n << " Eh uma consoante. \n";
        
   
    }


}
	
	void algarismo(char l)
	{
		
		if( l =='1' || l =='2' || l =='3' || l =='4' || l =='5' || l =='6' || l =='7' || l =='9'  )
		{
			cout<<"Esse caractere e um algarismo\n";
		}	
		
		
	}
	
	
	

int main()
{
char letra;
cout<<"Digite um caractere \n";
cin>>letra;
minuscula(letra);
maiuscula(letra);
let(letra);
vogal(letra);
consoante(letra);
algarismo(letra);
getch();



}
