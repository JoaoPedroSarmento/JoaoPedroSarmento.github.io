#include<iostream>
#include<conio.h>

using namespace std ;

 int main () {
 	int tam = 5;

	int  v[tam] [tam] ,  soma = 0 ;
	int  valor ;
	for ( int i = 0 ; i < tam ; i++) {
		for ( int k = 0 ; k < tam ; k++) {
	            cout << "Insira um valor..... linha -- > " << k << " coluna -- > " << i ;
	            cin >> valor ;
	       	    v[k] [i] = valor ;
  		}
	}


	cout << endl ;
	//  14 , a ) Somando a linha 4 de todas as colunas da matriz

	int soma1 = 0 ;

	for ( int i = 0 ; i < tam ; i++ ) {
		 for ( int k = 0 ;  k < tam ; k++) {
		 	if ( i == 3 ) {
		 	   soma1 = soma1 + v[i] [k] ;
			 }
		 }
	}



   // 14 , b )  Soma da 2 coluna da matriz

   int soma2 = 0 ;

 for ( int i = 0 ; i < tam ; i++ ) {
     for ( int  k = 0 ; k < tam ; k++) {
        if ( k == 1 ){
            soma2 = soma2 + v[i] [k];
            cout << v[i] [k] << endl ;
        }
     }
   }

   // 14 , c ) Soma da diagonal principal da matriz

	int soma3 = 0 ;

    int j = 0 ;
   for ( int i = 0 ; i < tam ; i++  ) {
      soma3 = soma3 + v[i] [j] ;
      j++;
   }

    // 14 , d ) Soma da diagonal secundária da matriz

    int soma4 = 0 ;
    j = 0 ;

for ( int i =  tam -1  ; i >  -1  ; i-- ) {
        soma4 = soma4 + v[i] [j] ;
        j++;
	   }



	 // 14 ,  e ) Soma de todos os elementos da matriz

	 int soma5 = 0 ;

	 for ( int i = 0 ; i < tam ; i++) {
	 	for ( int k = 0 ; k < tam ; k++) {
	 		soma5 = soma5 + v[k] [i];
		 }
	 }


	 // 14 , f ) Escrever todas as somas anteriores e a representação da matriz

	 // Representação da matriz
	 cout << "\nMatriz"<<endl ;
	for ( int i = 0 ;  i < tam ; i++ ){
		cout << "\n\t";
		for ( int k = 0 ; k < tam ; k++) {
			cout << v[i] [k] << " " ;
		}
		cout << endl ;
	}

	cout << endl ;


	cout << "SOMAS : " << endl ;

	cout << "Resultado da soma da linha 4 de todas as colunas da matriz 5 por 5 -- > " << soma1 << "\n" ;
    cout << "Resultado da soma dos vetores da coluna 2  -- > " << soma2  <<  "\n" ;
    cout << "Resultado da soma da  diagonal principal da matriz -- > " << soma3 << "\n" ;
    cout << "Resultado da soma da diagonal secundaria da matriz -- > " << soma4 << "\n" ;
    cout << "Resultado da soma de todas as linhas e colunas da matriz -- > " << soma5 ;


}
