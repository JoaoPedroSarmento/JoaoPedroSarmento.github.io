#include<math.h>
#include<conio.h>
#include<iostream>

using namespace std;

void mes(int mes )

{
	if( mes == 1)
	{
		cout<<"Mes janeiro\n";
		
	}
		if( mes == 2)
	{
		cout<<"Mes fevereiro\n";
		
	}
		if( mes == 3)
	{
		cout<<"Mes marco\n";
		
	}
		if( mes == 4)
	{
		cout<<"Mes abril\n";
		
	}
	
		if( mes == 5)
	{
		cout<<"Mes maio\n";
		
	}
	
	
		if( mes == 6)
	{
		cout<<"Mes junho\n";
		
	}
		if( mes == 7)
	{
		cout<<"Mes julho\n";
		
	}
	
		if( mes == 8)
	{
		cout<<"Mes agosto\n";
		
	}
		if( mes == 9)
	{
		cout<<"Mes setemrbo\n";
		
	}
		if( mes == 10)
	{
		cout<<"Mes outubro\n";
		
	}
		if( mes == 11)
	{
		cout<<"Mes novembro\n";
		
	}
	
		if( mes ==  12)
	{
		cout<<"Mes dezembro\n";
		
	}
	
     if( mes > 12){
		
		cout<<"isso nao e um mes";
	}
	
	
	
	
	
}


int main()
{
	int valor;
	cout<<"Digite um numero e ira retornar o seu mes\n";
	cin>>valor;
	mes(valor);
	getch();
	
	
}
