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
	cout << "Insira a posicao inicial da peca bispo do xadrez -- > " ; 
	cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l1 ;
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> c1 ;

	
	cout << "Insira a posicao que voce deseja mecher na peca torre do xadrez -- > ";
    cout << "LINHA -- > ( max : 7 ) ( min : 0 ) " ;
	cin  >> l2 ;   
	cout << "COLUNA -- > ( max : 7 ) ( min : 0 ) " ;
    cin >> c2 ;
    
	 	 cout << "\nMatriz"<<endl ; 
	for ( int i = 0 ;  i < tam ; i++ ){
		cout << "\n\t";
		for ( int k = 0 ; k < tam ; k++) {
			cout << x[k] [i] << "\t" ;
		}
	}
	 int cont = 0 ;
	 int k = 0 ;
	 cout <<"\n";
	for ( int i = 0 ; i < tam  ; i++) {
		
		if ( i % 2 == 0   ) {
			 cout <<"\n";
			 if ( x [l2] [c2] == x[i] [k] && c2 == k ) {
			  cont++;
		}
			k++;
		}
	  else 
	  if ( i% 2 != 0 ) { cout <<"\n";
	  	 if ( x [l2] [c2] == x[i] [k] && c2 == k ) {
	       cont++;
         }
	  k++;
	}
}
k = 0 ; 
 	       for ( int i =  tam -1  ; i >  -1  ; i-- ) {
   	if ( i % 2 == 0 ) {
   		 if ( x [l2] [c2] == x[i] [k] && c2 == k ) {
	       cont++;
         }
   		k++;
	   }
	   else 
	   if ( i % 2 != 0 ) {
	   	if ( x [l2] [c2] == x[i] [k] && c2 == k ) {
	       cont++;
         }
	   	k++;
	   }
   }
	 
if ( cont == 1 ) {
	cout << " MOVIMENTO POSSIVEL --- > a peca torre foi da linha " << l1 << " para a linha " << l2 << " e da coluna " << c1 << " para a coluna " << c2 ; 

}

else {
	cout << "Esse movimento nao e possivel " ; 
}
}
