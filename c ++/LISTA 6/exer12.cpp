#include<iostream>
#include<conio.h>

using namespace std;

int main () {

	   int  l , c   ;

	   float valor ;

	   cout << "Insira o tamanho da linha -- > " ;
	   cin >> l ;

	   cout << "Insira o tamanho da coluna -- > ";
	   cin  >> c ;
	   int v[l] [c] ;

	   for ( int i = 0 ; i < c ; i++) {
	   	for ( int k = 0 ; k < l ; k++) {
	   		cout << "Insira o valor -- > linha --> " << k << " coluna -- > " << i ;
	   		cin  >> valor ;
	   		v[k] [i] = valor ;
		   }
	   }

        cout << "\n Matriz : ";
        for ( int i = 0 ; i < l ; i++) {
        	cout << "\n";
        	for ( int j = 0 ; j < c ; j++) {
        		cout << v[i] [j] << "  ";
			}			cout << endl ;
		}

       int trans [c] [l];

       cout << "\n Matriz  transposta : " ;
      for ( int i = 0 ; i < c ; i++ ) {
      	cout << "\n";
      	for ( int k = 0 ; k < l   ; k++) {
                trans [i] [k] = v[k] [i] ;
      		cout << trans [i] [k]  << "  " ;
		  }
		  cout << endl ;
	  }
}
