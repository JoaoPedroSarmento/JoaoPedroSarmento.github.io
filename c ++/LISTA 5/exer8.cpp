#include<iostream>
#include<conio.h>
using namespace std;
int main()
{
	int cont = 0;
	int n;
	int soma = 0;
	for(int i = 1; i <= 5 ;i++)
	{
	 cout<<"Digite um numero inteiro -->";
	 cin>>n;
		(n >= 0 ) ? soma = soma + n : cont++;
	}
	cout<<"O resultado da soma dos numeros positivos e  ---> "<<soma<<endl;
	
	cout<<"Numeros negativos --> "<<cont<<endl;
	getch();
	
}
