#include<iostream>
#include<conio.h>
using namespace std;


float FuncaoFloor( float n) {
	
	float i;
	if( n < 0 ) { 
	  for(i = -1; i > n ; i--) ;
	     return i + 1 ;
	} 
	
     for(i = 1; i < n ; i++ ) ;
	  if ( i > n )  return i -1 ;
}


float FuncaoCeil( float n)  { 
	
    	float i;
	if( n < 0 ) { 
	  for(i = 1; i > n ; i--) ;
	     return i + 1 ;
	} 
	
	for(i = 0; i < n ; i++ ) ;
		  return i;
}


int main() { 
	float n ;
	cout << "Digite um numero -- > " ;
        cin  >> n ;
	cout << "Numero com a funcao floor -- > " << FuncaoFloor(n) << endl ;
	cout << "Numero com a funcao ceil  -- > " << FuncaoCeil(n)  << endl ;
}
