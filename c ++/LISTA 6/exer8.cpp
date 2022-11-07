#include<iostream>
#include<conio.h>

using namespace std; 

int MaiorNumeroDeUmVetor (int v[] , int  tam )
{
	int maior;
	for ( int i = 0 ; i  < tam ; i++)
	{
		if ( i == 0 )
		{
			maior = v[i];
		}
		if(maior < v[i]) maior = v[i];
	}
	  return maior;
}

int main ( )
{ 
	int tam , valor , maior  ;
	cout << "Insira o tamanho do vetor -- > "  ;
	cin >> tam ; 
	
	int v[tam];
	
   for ( int i = 0 ; i < tam ; i ++ )
   {
   	  cout << "Insira o valor do vetor , posicao -- > " << i << endl ; 
   	  cin >> valor;
	  v[i] = valor;
   }

	 maior = MaiorNumeroDeUmVetor(v, tam );
	cout << "O maior numero do vetor e -- > " << maior ; 
    
    getch();
 	
}
