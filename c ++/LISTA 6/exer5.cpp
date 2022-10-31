#include<iostream>
#include<conio.h>

using namespace std ; 
  
  int  NumeroDeAcertos ( int G[] , int R[] , int tam) {
  	 int cont = 0 ;
  	 for ( int i = 0 ;  i < tam ; i++) {
  	 	 if ( R[i] == G[i] ) cont++;
	   }
	   return ( cont == 13 ) ? 1 : cont ; 
	   	
  }

 int main ( )  {
 	
 	int  tam = 13 ,  G[tam] , R[tam] , valor ;
	 
	  for ( int i = 0 ; i < tam ; i++) {
	  G[i] = i + 1;
	}
	 
	 for ( int i = 0 ; i < tam ; i++ ) {
	 	cout << "Insira o valor -- > , posicao -- > " << i + 1 << endl ; 
	 	cin >> valor ;	
	 	R[i] = valor;
	 }
	
	 	int acertos = NumeroDeAcertos (G , R  , tam );
	 	switch(acertos) {
	 		case  1 : cout << "GANHADOR ,  PARABENS " ; 
	 		break;
	 		default : cout << "Numeros de acertos -- > " << acertos ; 
	 		break;
		 }
	
   getch() ; 
   
 }
