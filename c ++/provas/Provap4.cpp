#include<iostream>
#include<conio.h>
using namespace std;
bool NumeroPrimo( int n )
{
    for(int i = 2 ; i < n ; i++)
    {
    	if(n % i == 0 ) return false;
	}
	return true;
}

int ProximoPrimo( int n )
{
	n = n + 1 ;
	while(NumeroPrimo(n) != true)
	{
	 n++;
	}
	return n ; 
}

int mdc ( int n1 , int n2 )
{
 if( n1 % n2 == 0 ) return n2 ;
 else
 {
 return mdc(n2 , n1 % n2 );
}
}
int main()
{
	int n , n2;
	cout << "Informe um numero -- > ";
	cin >> n ;
	cout << "O proximo numero primo depois de "  << n  << " e " << ProximoPrimo(n) << endl ;
	cout << "Informe outro numero -- > ";
	cin >> n2 ;
	cout << "O proximo numero primo depois de "  << n2  << " e " << ProximoPrimo(n2) << endl ;
	
	cout << "O MDC dos valores " << n << " e " << n2 << " e = " << mdc(n,n2) <<endl;
	
}
