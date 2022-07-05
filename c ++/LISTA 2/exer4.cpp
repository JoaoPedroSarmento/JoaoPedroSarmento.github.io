 #include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float retorna_r(float g)
{
	float r; 
	const float  pi = 3.141592; 
	
	r  =   pi * g /180;          
	return r;
	
	
}

int main()

{
	float g,retorna;
	
	cout<<"Digite o valor do angulo\n\n";
	cin>>g;
	
	retorna = retorna_r(g);
	
	cout<<g<< " O angulo em radianos e   :"<<retorna;
	
	
	
}
