#include<iostream>
#include<conio.h>
 
using namespace std ;


int main () {
	int l1 , c1 , l2 , c2 , tam = 8 ;
    	
	int x[tam] [tam] ;
	
	int j = 1;
	
	for ( int i = 0 ; i < tam ; i++ ) {
		for ( int k = 0 ; k < tam ; k++) {
			x[k] [i] = j ;
			j++;
			if ( k == 7 ) j = 1 ;
		}
	} 
	cout << "XADREZ : " << endl ;	
	cout << "Insira a posicao inicial da peca torre do xadrez -- > " ; 
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l1 ;
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c1 ;

	
	cout << "Insira a posicao que voce deseja mecher na peca torre do xadrez -- > ";
    cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l2 ;  // 1  = 2 ,  
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	
	cin  >> c2 ;
	x[l2][c2] ; 
	 int cont = 0 ;
	 
	if ( c2 == c1 ) {
	for ( int i =  c2 ; i == c1  ; i ++ ) {
		for ( int k = 0 ; k < tam ; k++) {
		 if (x[l2] [i] ==  x [k] [i]  ) {
		 	cont  = cont + 1 ;
		 } 	
		}
	}
}
   if ( cont == 1 ) {
   		cout << "A peca torre foi da linha -- > " << l1 << " para linha " << l2 ;
   }		
   
   else
    if ( x [l2] [c2] == x[l1] [c1])
   {
   	 cout << "A peca foi da coluna  -- > "  << c1 << " parra a coluna  -- > " << c2 ; ;
   }
   else {
   	cout << "A peca nao pode ser movida alem de horizontalmente ou verticalmente " ; 
   }	 
}
