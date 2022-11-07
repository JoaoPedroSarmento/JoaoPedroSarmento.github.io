#include<iostream>
#include<conio.h>

using namespace std;

 int main () {

 	int j = 0 ;
 	int v[4] [4] ;

 	float valor ;
 	float soma = 0 ;

	  for ( int i = 0 ; i <  4 ; i++) {
 	 	for ( int k = 0 ; k < 4 ; k++) {

 	 	     cout << "Insira o valor -->  linha -->  " << k << " coluna -- > " << i  ;
			  cin >> valor ;

			  v[k] [i] = valor ;
		  }
	  }

    int c = 0 ;
 	for ( int i = 0 ; i < 4 ; i++ ) {
        soma = soma + v [i] [c] ;
        c++;

	 }

        for ( int i = 0 ; i < 4 ; i++ ){
            for ( int j = 0 ; j < 4 ; j++ ) {
                cout << v[i] [j] << " ";
            }
            cout << endl ;
        }
    cout << endl ;
	 cout << "Soma da diagonal da matriz -- >: " << soma ;

 }
