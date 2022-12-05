#include<iostream>
#include<math.h>
#include<conio.h>
 
 using namespace std;
 
 void PontoMedio ( float &xi,float &xf,float yf,float yi) { 
	 
	xi = (xi + xf)/2;
	xf = (yi + yf)/2;
}


int main() { 

	float xi,yi,xf,yf;
	
	cout << "Digite o valor de xi\n";
	cin >> xi;
	
		
	cout << "Digite o valor de xf\n";
	cin >> xf;
	
		
	cout << "Digite o valor de  yf\n";
	cin >> yf;
	
		
	cout << "Digite o valor de yi\n";
	cin >> yi;
	
	PontoMedio (xi,xf,yf,yi) ;
	cout << xi << " , " << xf;
	getch();
}
