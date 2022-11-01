#include<iostream>
#include<conio.h>

using namespace std ;
 int main () { 
 	int l1 , c1 , l2 , c2 , tam = 8 ;
    
	int x[tam] [tam] ;
    
	int j = 0;
	
	for ( int i = 0 ; i < tam ; i++ ) {
		for ( int k = 0 ; k < tam ; k++) {
			x[k] [i] = j ;
			j++;
			if ( k == 7 ) j = 0 ;
		}
	} 
	
	
	 cout << "\nMatriz"<<endl ; 
	for ( int i = 0 ;  i < tam ; i++ ){
		cout << "\n\t";
		for ( int k = 0 ; k < tam ; k++) {
			cout << x[k] [i] << "\t" ;
		}
	}
	
		cout <<"\n";
	cout << "XADREZ : " << endl ;	
	cout << "Insira a posicao inicial da peca cavalo do xadrez -- > " ; 
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c1 ;
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l1 ;

	
	cout << "Insira a posicao que voce deseja mecher na peca cavalo do xadrez -- > ";
    cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c2 ;   
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
    cin >> l2 ;
    int cont = 0 ;
    for ( int i = c1 ; i != c2 ; i++ ) {
    	cont++;
	}
	
   if ( cont == 2 ) {
   	   if ( x [l1 -1 ] [c2] == x [l2] [c2]  ) cont++;
   	   else 
   	   if (  x [l1 + 1 ] [c2] == x [l2] [c2]) cont++;
   }
   
   if ( cont == 3 ) {
   	cout << "A peca cavalo foi da coluna -- >" << c1 << " para a coluna -- > " << c2  << " da linha -- > " << l1 << " para linha  -- >  " << l2 ;
   }
   else {
   	cout << "Movimento da peca cavalo esta incorreto !" ; 
   }
 }
