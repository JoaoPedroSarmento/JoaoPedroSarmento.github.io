#include<iostream>
#include<math.h>
#include<conio.h>
 
 using namespace std;
 
 void retorno ( float &xi,float &xf,float yf,float yi)
{
	float xm,ym;
	
	xm = (xi + xf)/2;
	ym = (yi + yf)/2;
	
xi = xm ;
	
 xf = ym ;
	
	
	
	
}


int main()

{
	
	
	float xi,yi,xf,yf;
	
	cout<<"Digite o valor de xi\n";
	cin>>xi;
	
		
	cout<<"Digite o valor de xf\n";
	cin>>xf;
	
		
	cout<<"Digite o valor de  yf\n";
	cin>>yf;
	
		
	cout<<"Digite o valor de yi\n";
	cin>>yi;
	
	retorno(xi,xf,yf,yi);
	cout<<xi<<" , "<<xf;
	getch();
	
	
}
