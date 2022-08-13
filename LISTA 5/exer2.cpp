#include<iostream>
#include<conio.h>

using namespace std;

int potencia(float n,float p)
{ 
   int i = 1;
   int potencia  = n;
	for(i; i < p ;i++)
	{
		potencia = potencia * n;
	}
		return potencia;
}


int main()
{
	int n,p;
	cout<<"Digite o numero ---> ";
	cin>>n;
	
	cout<<"Digite a potencia ---> ";
	cin>>p;
	int resultado = potencia(n,p);
	cout<<"O resultado da potencia e ---> "<<resultado;
	
	getch();
	
}
