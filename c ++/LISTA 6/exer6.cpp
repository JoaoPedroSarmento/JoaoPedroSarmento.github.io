#include<iostream>
#include<conio.h>
using namespace std;

int InverteVetor(int v[] , int tam )
{
	 int j = 0 ;
	 int aux;
	 int tam2 = tam/2; 
	 
	 for ( int i = tam - 1 ; tam2 <  i ; i-- )  
	  {
	    	aux = v[j];
	    	v[j] = v[i];
	    	v[i] = aux;
	        j++	;
	    
	  }
	  
}

int main ()
{
	int tam , valor ;
	cout << "Digite o tamanho do vetor -- > ";
	cin >> tam ;
	
	int v[tam];
	
   for ( int i = 0 ; i < tam ; i ++ )
   {
   	  cout << "Insira o valor do vetor , posicao -- > " << i;
   	  cin >> valor;
	  v[i] = valor;
   }
	
	InverteVetor(v, tam );
	
	 for ( int i = 0 ; i < tam ; i++)
     {
     	cout << "Vetor , posicao -- > " << i << "\tvalor -- > " << v[i] << endl ; 
	 }
	 getch();
 
}
