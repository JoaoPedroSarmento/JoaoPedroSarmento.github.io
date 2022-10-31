#include<iostream>
#include<conio.h>

using namespace std; 

int ValorMultiplicadoPeloIndice( int v[] , int  tam )
{
	 for ( int i = 0 ; i < tam ; i++ ) 
	 {
	 	v[i] = v[i] * i ;
	 }
}

int main ( )
{ 
	int tam , valor ;
	cout << "Insira o tamanho do vetor -- > "  ;
	cin >> tam ; 
	
	int v[tam];
	
   for ( int i = 0 ; i < tam ; i ++ )
   {
   	  cout << "Insira o valor do vetor , posicao -- > " << i << endl ; 
   	  cin >> valor;
	  v[i] = valor;
   }

	ValorMultiplicadoPeloIndice(v, tam );
	
	 for ( int i = 0 ; i < tam ; i++)
     {
     	cout << "Vetor , posicao -- > " << i << "\tvalor -- > " << v[i] << endl ; 
	 }
	 getch();
 	
}
