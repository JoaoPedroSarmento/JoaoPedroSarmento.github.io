#include<iostream>
#include<conio.h>
using namespace std;
 
 int Fatorial(int n)
 {
  int i, fatorial = 1 ;
  for(i = 1  ; i <= n ; i++ )
  {
  fatorial = fatorial * i;
  }    
  return fatorial;
 }

int main()
{
	 int n, resultado;
	cout<<"Digite um numero ---> ";
	cin>>n;
	resultado = Fatorial(n);
	cout<<"O fatorial de ----> "<<n<<" e ---> "<<resultado;
    getch();
}
