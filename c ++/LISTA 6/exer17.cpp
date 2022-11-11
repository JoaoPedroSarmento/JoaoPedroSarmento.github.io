#include<iostream>
#include<conio.h>

using namespace std ;
 int main () {
 	int l1 , c1 , l2 , c2 , tam = 8 ;

	int x[tam] [tam] ;

	int j = 0;

	for ( int i = 0 ; i < tam ; i++ ) {
		for ( int k = 0 ; k < tam ; k++) {
			x[i] [k] = j ;
		}
		j++;
	}


	 cout << "\nMatriz"<<endl ;
	for ( int i = 0 ;  i < tam ; i++ ){
		cout << "\n\t";
		for ( int k = 0 ; k < tam ; k++) {
			cout << x[i] [k] << "\t" ;
		}
		cout << endl ;
	}

		cout <<"\n";
	cout << "XADREZ : " << endl ;
	cout << "Insira a posicao inicial da peca cavalo do xadrez -- > " ;
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c1 ;
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l1 ;

	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
    cin >> l2 ;

    cout << "Insira a posicao que voce deseja mexer na peca cavalo do xadrez -- > ";
    cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c2 ;

    int cont  = 0 ;

   if ( ( c1 != c2 && l1 - 2 == l2 ) || ( l1 + 2  == l2 && c1 - 1 == c2  ) || ( c1 + 1 == c2 ) ) {

    cont++;
   }
  else
  if( (l1 + 1 == l2 && c1 + 2 == c2 )  || ( l1 - 1 == l2 && c1 - 2 == c2 )  || ( l1 + 1 == l2 && c1 - 2 == c2 ) || ( l1 - 1  == l2 && c1 + 2 == c2  ) )  {

    cont++;
  }

   if ( cont == 1  ) {
   	cout << "Movimento possivel !!!" ;
   }
   else {
   	cout << "Movimento da peca cavalo esta incorreto !!" ;
   }
 }
