#include<iostream>
#include<conio.h>
using namespace std;

int Floor(float n)
{
	int Ninteiro = n; 
	int resultado = n ;
	int Ninteiro2 = n -1; 
	
	while(Ninteiro <= n)
	{
	    (Ninteiro == n ) ? resultado = n  :  Ninteiro;
	   return resultado ; 
	}
}

int Ceil(float n)
{
    int Ninteiro = n;
	int resultado = n;
	while(Ninteiro <= n)
	{
	  (Ninteiro == n) ? resultado : resultado  = resultado + 1 ;
  	return resultado;	 
	}

}
int main()
{
	float n, resultado;

    cout<<"Digite um numero --->";
    cin>>n;
    resultado = Floor(n);
    cout<<"Funcao floor ---> "<<resultado<<endl;    
    resultado = Ceil(n);
    cout<<"Funcao ceil ---> "<<resultado;
   getch();
}
