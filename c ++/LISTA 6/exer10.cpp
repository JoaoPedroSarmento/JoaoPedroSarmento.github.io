#include<iostream>
#include<conio.h>

using namespace std ;

int main () {

	int tamL = 2  , tamC = 3 , valor, soma = 0 ; ;

	int v[tamL] [tamC] ;

	for ( int i = 0 ; i < tamC ; i++ ) {
        for ( int j = 0 ; j < tamL ; j++ ){
            cout << "Insira o valor , linha -- > " << j << " coluna -- > " << i;
            cin  >> valor ;
            v [j] [i] = valor ;
            soma = soma + v [j] [i] ;
        }
	}

	for ( int i = 0 ; i < tamL ; i++ ) {
	 for ( int j = 0 ; j < tamC ; j++ ){
        cout << v[i] [j] << " " ;
	 }
	 cout << "\n" ;
}
 cout << endl ;
 cout << "O resultado da soma de todos os elementos da matriz e -- > " << soma ;

}
