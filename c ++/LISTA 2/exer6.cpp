#include<iostream>
#include<math.h>
#include<conio.h>

using namespace std;


float distancia(float xa,float xb,float ya,float yb)
{
	float p1;
	
	p1 = sqrt( pow(xa-xb,2) + pow(ya-yb,2));
    return p1;
	
	
	
}

int main()
{
	float xa,xb,ya,yb;
	float ret_distancia;
	
	cout<<"DIGITE O VALOR DO PONTO XA ------->\n";
	cin>>xa;
	
		cout<<"DIGITE O VALOR DO PONTO XB ------->\n";
	cin>>xb;
	
		cout<<"DIGITE O VALOR DO PONTO YA ------->\n";
	cin>>ya;
	
		cout<<"DIGITE O VALOR DO PONTO YB ------->\n";
	cin>>yb;
	
    ret_distancia = distancia(xa,xb,ya,yb);
	
	cout<<"A distancia entre os dois pontos e : "<<ret_distancia;
	getch();
	
	
	
	
}
