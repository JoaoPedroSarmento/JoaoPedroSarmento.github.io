#include<iostream>
#include<conio.h>

using namespace std ;

int main () {
	
	int TamDoVetor = 2  , TamDaMatriz = 3 ;
	
	int v[TamDoVetor] [TamDaMatriz] ;
	
       		
		for ( int i = 0 ; i < TamDaMatriz ; i++) {
			for (int k = 0 ; k < TamDoVetor ; k++ ) {
				v[k] [i] = i + 1 ; 
				cout << v[k] [i]  << endl ; 
			}
		}
		getch();
}
