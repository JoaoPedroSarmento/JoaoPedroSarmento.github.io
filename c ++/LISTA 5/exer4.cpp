#include<iostream>
#include<conio.h>
using namespace std;
 
 int Fatorial(int n) { 
   int fatorial = n ;
  for( int i = n - 1 , c = 1    ;  c  <  n ; i-- , c++  ) {
  fatorial = fatorial * i;

  }     
 return ( n > 0 ) ?  fatorial : 1  ; 
 }

int main() { 
	int n, resultado;
	cout<<"Digite um numero ---> ";
	cin>>n;
	resultado = Fatorial(n);
	cout<<"O fatorial de ----> "<<n<<" e ---> "<<resultado;
    getch();
}
