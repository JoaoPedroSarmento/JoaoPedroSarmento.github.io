#include<iostream>
#include<conio.h>
using namespace std;

int Floor(float n)
{
	int Ninteiro = n;
	int Ninteiro2 = n -1; 
	
	while(Ninteiro <= n)
	{
		if(Ninteiro < Ninteiro2 )  return Ninteiro;
		else
	    if( Ninteiro == n) return n;
	    else
	    return Ninteiro;	 
	}
	
}

int Ceil(float n)
{
    int Ninteiro = n;
	
	while(Ninteiro <= n)
	{
	    if(Ninteiro == n) return n;
	    else
	     return Ninteiro + 1;	 
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

