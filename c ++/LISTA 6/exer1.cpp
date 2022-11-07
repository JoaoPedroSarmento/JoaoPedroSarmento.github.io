#include<iostream>
using namespace std;

int main()
{
	int tam ;

	cout << "Insira o tamanho da linha desse vetor -- > " ;
	cin  >>  tam ;

	int array[tam] , array2[tam] ;
	for(int i = 0; i < tam; i++ )
	{
	    array[i] = i + 1 ;

	   for(int j = 0 ; j <  tam   ; j++ )
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
