#include<iostream>
#include<math.h>
#include<conio.h>
using namespace std;

void soma_numeros(float x,float y)

{

	
cout<<x<<"+"<<y<<"= "<<x+y<<"\n";
	 
	
	
}

void subtrai_numeros(float x,float y)

{
cout<<x<<"-"<<y<<"= "<<x-y<<"\n";

	
	
}

void multiplica_numeros(float x,float y)

{
	
	cout<<x<<"x"<<y<<"=  "<<x*y<<"\n";
}


void divide_numeros(float x,float y)

{
cout<<x<<"/"<<y<<"= "<<x/y<<"\n";
	 
	
	
}

void opera(float x, float y)
{
   cout<<"Primeiro operando : "<<x<<"\n";
   cout<<"Segundo operando :"<<y<<"\n";
  cout<<"Resultados.....\n";
   soma_numeros(x,y);
  subtrai_numeros(x,y);
  multiplica_numeros(x,y);
  divide_numeros(x,y);
 
	
	
	
}


int main()

{
	float x,y;
	cout<<"Digite o primeiro operando :\n\n";
	cin>>x;
	cout<<"Digite o segundo operando : \n\n";
	cin>>y;
	opera(x,y);
	getch();
	
	
	
}
