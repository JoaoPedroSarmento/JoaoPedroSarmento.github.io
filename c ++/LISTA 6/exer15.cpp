#include<iostream>
#include<conio.h>

using namespace std ;


int main () {
	int l1 , c1 , l2 , c2 , tam = 8 ;

	int x[tam] [tam] ;

	int j = 0;

	for ( int i = 0 ; i < tam ; i++ ) {
            j = 1;
		for ( int k = 0 ; k < tam ; k++) {
			x[k] [i] = j ;
			j++;

		}
	}


	 	 cout << "\nMatriz"<<endl ;
	for ( int i = 0 ;  i < tam ; i++ ){
		cout << "\n\t";
		for ( int k = 0 ; k < tam ; k++) {
			cout << x[k] [i] << "\t" ;
		}
		cout << endl ;
	}
	cout <<"\n";
	cout << "XADREZ : " << endl ;
	cout << "Insira a posicao inicial da peca torre do xadrez -- > " ;
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l1 ;
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c1 ;


	cout << "Insira a posicao que voce deseja mexer na peca torre do xadrez -- > ";
    cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l2 ;  // 1  = 2 ,
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;

	cin  >> c2 ;

	x[l2][c2] ;
	 int cont = 0 ;


     int i = l1 ;
    if ( c1 != c2 && l1 == l2 ) {
      cont++;
    }
   else
    if ( c1 == c2 && l1 != l2 ){
        cont++;
    }

   if ( cont == 1 ){
    cout << "Movimento possivel !! " ;
   }
   else {
    cout << "Movimento nao e possivel !! " ;
   }
}
