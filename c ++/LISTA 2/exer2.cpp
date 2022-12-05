#include<iostream>
#include<conio.h>

using namespace std;

float CelsiusParaFahrenheit (float celsius )  {
	return   1.8 * celsius + 32;            
}

int main() { 
	
	float celsius ,Retorno;
	
	cout << "Digite um valor em celsius\n\n";
	cin>>celsius ;
	
	Retorno = CelsiusParaFahrenheit ( celsius );
	
	cout << celsius << " para fahrenheit e equivalente a :" << Retorno;
}
