#include<iostream>
using namespace std;

int main()
{
	int tam = 6; 
	int array[tam] ;
	array[0] = tam; 
	int array2[tam];
	for(int i = 1; i < tam; i++ )
	{
	    array[i] = i;
	  
	   for(int j = 0 ; j <= tam - 1  ; j++ )
	 {
	    array2[j] = array[j];	
	 }
		
	}
	// Mostrando na tela o valor dos dois Arrays 
 for ( int i = 0 ; i < tam ; i++ ) {
 	cout << "Primeiro array -- > , linha -- > " << i << " valor -- > " << array[i] << endl ; 
 	cout << "Segundo array -- > , linha -- > " << i << " valor -- > " << array[i] << endl ; 
 }
}
