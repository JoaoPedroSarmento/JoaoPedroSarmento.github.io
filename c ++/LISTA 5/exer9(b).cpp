#include<iostream>
#include<conio.h>

using namespace std;

int main()
{
	int q;
	cout<<"Digite a quantidade de alunos com mais de 20 anos : ";
	cin>>q;
	float  a ;
	float  soma = 0 ;
   float media;
	for(int i = 1; i <= q ; i++)
	{
	cout<<"Informe a altura : ";
	cin>>a;	
	soma = soma + a;
	media =  soma / q;
	}
	cout<<"A media das alturas e ---> "<<media;
	getch();
	
	
}
