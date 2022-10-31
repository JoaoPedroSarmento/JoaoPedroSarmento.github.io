#include<iostream>
#include<conio.h>

using namespace std;

  int IntercalacaoDeVetores( int v1[], int v2[], int v3[], int tam)

{
int j = 0;
int cont = 0;
int tam2 = tam + tam;

for(int i = 0 ; i < tam2; i++)

{ 
  if ( i % 2 == 0 )
{
  v3[i] = v1[j];

j++;

}
else
{
  v3[i] = v2[cont];
  cont++;
    }
  }
}

 int main ()
 {
 	
 	 int tam   , valor ;  
	cout << "Insira o tamanho do primeiro e do segundo vetor -- > " << endl;
	cin  >>  tam;
	 int V1[tam] , V2[tam] ; 
	 int tam2 = tam + tam ;
	 int v3[tam2]; 
	
	for ( int i = 0 ; i < tam ; i++ )
     {
     	cout << "Insira um  valor para o primeiro vetor na posicao -- > " << i  << " valor -- > ";
     	cin  >> valor ;
     	V1[i] = valor ;

	 }
	 
	 	for ( int i = 0 ; i < tam ; i++ )
     {
     	cout << "Insira um  valor para o segundo vetor na posicao -- > " << i  << " valor -- > ";
     	cin  >> valor ;
     	V2[i] = valor ;

	 }
		 
	  IntercalacaoDeVetores(V1, V2 ,v3 ,tam);
	 
	 for( int i = 0 ; i < tam2 ; i++)
	 {
	 	cout << "Terceiro vetor , " << "posicao -- > " << i << "  valor -- >  " << v3[i] << endl ; 
	 }
 	
 }
