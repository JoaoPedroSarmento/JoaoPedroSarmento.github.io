#include<iostream>
#include<conio.h>

using namespace std;

float retorna_f(float c )
{
	float f;
	
	f =   1.8 * c + 32;            
	return f;
	
	
}

int main()

{
	float c,retorna;
	
	cout<<"Digite um valor em celsius\n\n";
	cin>>c;
	
	retorna = retorna_f(c);
	
	cout<<c<< " para fahrenheit e equivalente a :"<<retorna;
	
	
	
}
