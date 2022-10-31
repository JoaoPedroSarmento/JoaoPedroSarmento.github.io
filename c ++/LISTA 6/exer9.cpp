#include<iostream>
#include<conio.h>
using namespace std ;
 
 int MaiorNumero( int tam , int tam2 ) {
 	 if ( tam > tam2 ) return tam;
 	 return tam2;
 }
 
int main ()
{
	int tam , tam2 , maior , valor;
    
    cout << "Insira o tamanho do primeiro vetor e matriz -- > "; 
    cin  >> tam ;
     cout << "Insira o tamanho do segundo vetor e matriz -- > "; 
    cin  >> tam2 ;
    int v1[tam] [tam] , v2[tam2] [tam2];
	
	maior =  MaiorNumero ( tam, tam2 ) ; 
	
	if( maior == tam) {
		for ( int i = tam2 ; i < tam ; i++ )
			for ( int k = tam2 ; k < tam ; k++)
			  v2 [k] [i] = 0 ;

	}
	
	else {
		for ( int i = tam; i < tam2 ; i++ )
		    for ( int k = tam ; k < tam2 ; k++)
			  v1 [k] [i] = 0 ;

}

	int resultado [maior] [maior] ;
	

	
	for ( int i = 0 ; i < tam  ; i++ )
	{
	
		 for ( int k = 0 ; k < tam ; k++ )
		 {
		 	cout << "Insira o valor -- > linha -- > " << k << " coluna -- > " << i ;
			cin >> valor; 
			v1[k] [i] = valor;
		 }
} 
      for ( int i = 0 ; i < tam2  ; i++ )
		 for ( int k = 0 ; k < tam2 ; k++ )
		 {
		 	cout << "Insira o valor -- > linha -- > " << k << " coluna -- > " << i ;
			cin >> valor; 
			v2[k] [i] = valor;
		 }
	
 		for ( int i = 0 ; i  < maior ; i++)
		 for ( int k  = 0 ; k < maior ; k++)
		 resultado [k] [i] = v1[k] [i] + v2[k] [i] ; 
	
	for ( int i = 0 ; i  < maior ; i++)
		 for ( int k  = 0 ; k < maior ; k++)
		 cout <<  resultado [k] [i] << endl  ; 
		 getch();
}
