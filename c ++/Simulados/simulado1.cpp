#include<iostream>
#include<conio.h>

using namespace std;

float Fahrenheit_para_celcius(float f)
{
	float c;
	c = 5*(f - 32)/9;
	return c;
}

float celcius_para_kelvin(float c)
{
	float k;
	
	k = c + 273.15;
	return k;
	
}

float Fahrenheit_para_kelvin(float F)
{
	float k;
	
	k = (F - 32 )  * 5/9 + 273.15;
	return k;
	
	
	
	
}

int main()
{
	float f,F,FK,FK2;
	cout<<"Digite um valor em fahrenheit ---> \n";
	cin>>f;
	
    F = 	Fahrenheit_para_celcius(f);
    FK =  celcius_para_kelvin(f);
    FK2 = Fahrenheit_para_kelvin (f);
	cout<<"Valor convertido em celcius  "<<F<<"\n";
	cout<<"Valor convertido de celcius para   kelvin  "<<FK<<"\n";
	cout<<"Valor convertido de fahrenheit  para   kelvin  "<<FK2<<"\n";
	
	
	
}
