#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float retorna_r(float a,float b,float g )
{
  float A, angulo ;
angulo = a*b;
return angulo;
  
  A =  ( angulo *  (sin (g) )  )/2;
  
  return A;
 
 
}

int main()

{
	float a,b,retorna,g;
	
	cout<<"Digite o primeiro valor do triangulo\n\n";
	cin>>a;
	
	cout<<"Digite o segundo  valor do triangulo\n\n";
	cin>>b;
	
		cout<<"Digite o segundo  valor do triangulo\n\n";
	cin>>g;
	

	

	
	retorna = retorna_r(a,b,g);
	
	cout<< " O resultado e   :"<<retorna;
	
	
	
}
