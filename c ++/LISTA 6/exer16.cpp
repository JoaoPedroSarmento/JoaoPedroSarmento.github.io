#include<iostream>
#include<conio.h>

using namespace std ;

int main () {

	int l1 , c1 , l2 , c2 , tam = 8 ;

	int x[tam] [tam] ;

	int j = 1;

	for ( int i = 0 ; i < tam ; i++ ) {
		j = 1 ;
		for ( int k = 0 ; k < tam ; k++) {
			x[i] [k] = j ;
            j++;
		}
	}

    cout << "\nMatriz"<<endl ;

	for ( int i = 0 ;  i < tam ; i++ ){
		for ( int k = 0 ; k < tam ; k++) {
			cout << x[i] [k] << "\t" ;
		}
		cout << endl ;
	}

	cout <<"\n";
	cout << "XADREZ : " << endl ;
	cout << "Insira a posicao inicial da peca bispo do xadrez -- > " ;
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l1 ;
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c1 ;

	cout << "Insira a posicao que voce deseja mexer na peca bispo do xadrez -- > ";
    cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l2 ;
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
    cin >> c2 ;


   int Pc = 0;
   int Pl = 0 ;

   for ( int i = tam ; i > -1 ; i-- )  { // Posição das peças
     if ( i == c2 ) {
         while ( Pc < i ){
             Pc++;
         }
        while(Pl <  l2 ) {
            Pl++;
        }
     }
   }

     int cont = 0 ;

     j = c1 ;

     for ( int i =  l1  ; i <  tam  ; i++ ) { // Verifica diagonal principal
         if ( i == Pl &&  j == Pc)  {
            cont++;
         }
        j++;
     }

     j = c1;

     for ( int i =  l1  ; i <  tam  ; i-- ) { // Verifica diagonal principal inversa

         if ( i == Pl &&  j == Pc)  {
            cont++;
         }
        j--;
     }


     j = c1;

     for ( int i = l1    ; i >= 0 ; i-- ) { // Verifica diagonal secundária inversa , aumenta coluna e diminui a linha
         if ( i == Pl &&  j == Pc)  {
            cont++;
         }
        j++;
    }


        j = c1;
        int i = l1 ;

    for ( j   ; j >= 0 ; j-- ) { // Verifica diagonal secundária  , aumenta linha e diminui coluna
         if ( i == Pl &&  j == Pc)  {
            cont++;
         }
        i++;
  }


if ( cont == 1 ) {
    cout << "Movimento possivel !!"  ;
}
 else {
    cout << "Movimento nao e possviel !! " ;
 }

}
