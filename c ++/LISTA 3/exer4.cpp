#include<iostream>
#include<math.h>
#include<conio.h>

using namespace std;

void raiz(float &a,float &b,float c)

{
	float delta,x1,x2;
	delta = pow(b,2)-(4*a*c);
	
	x1 = (-b -sqrt(delta) ) /2*a;
	x2 = (-b+sqrt(delta) )/2*a;
	
	a = x1;
	b = x2;
	
}

int main()

{
	float a,b,c;
	cout<<"Digite um numero\n";
	cin>>a;
	
	cout<<"Doigite outro numero\n";
	cin>>b;
	
	cout<<"Digite o ultimo numero\n";
	cin>>c;
	
	raiz(a,b,c);
	
	cout<<"O valor da primeira raiz e :  "<<a<<"  e o da segunda e :"<<b;
	
	
	
}
