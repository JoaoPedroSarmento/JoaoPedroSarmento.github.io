#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float retorna_r(float r)
{
	float v; 
	const float  ra = 3.141592; 
	
	v  =   4/3 * ra  * pow(r,3);            
	return v;
	
	
}

int main()

{
	float r,retorna;
	
	cout<<"Digite o valor do raio\n\n";
	cin>>r;
	
	retorna = retorna_r(r);
	
	cout<<r<< " O volume do raio e  :"<<retorna;
	
	
	
}
