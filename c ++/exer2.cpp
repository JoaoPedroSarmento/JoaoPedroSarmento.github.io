#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;



 int  potencia(int x , int y )
{
  int aux = pow(x,y);
  return aux;	
	
}


int main()
{
	int x , y, resultado ;
	cout << "Digite um numero quaisquer\n";
	cin  >> x;
	cout <<"Digite a potencia desse numero\n";
	cin  >> y;
	
	resultado = potencia(x,y);
	
	cout<<"O valor da potencia entre "<<x<<" e "<<y<<" e : "<<resultado;
	getch();
}
