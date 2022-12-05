#include<iostream>
#include<math.h>
#include<conio.h>]

using namespace std;

float DistanciaEntreDoisPontos(float xa,float xb,float ya,float yb) { 
	return  sqrt( pow(xa-xb,2) + pow(ya-yb,2)); 
}

int main() { 
	float xa,xb,ya,yb , Retorno ;
	
	cout << "DIGITE O VALOR DO PONTO XA ------->\n";
	cin >> xa;
	
	cout<<"DIGITE O VALOR DO PONTO XB ------->\n";
	cin >> xb;
	
	cout<<"DIGITE O VALOR DO PONTO YA ------->\n";
	cin >> ya;
	
	cout<<"DIGITE O VALOR DO PONTO YB ------->\n";
	cin >> yb;
	
       Retorno = DistanciaEntreDoisPontos(xa,xb,ya,yb);
	
	cout << "A distancia entre os dois pontos e : " << Retorno ;
	getch();
}
