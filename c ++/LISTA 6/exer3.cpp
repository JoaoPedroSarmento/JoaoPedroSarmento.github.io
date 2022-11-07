#include<iostream>
#include<conio.h>

using namespace std;


int main ()
{
	 int tam1 ,tam2  , valor ;  
	cout << "Insira o tamanho do primeiro e do segundo vetor -- > " << endl;
	cin  >>  tam1;
	 int V1[tam1] , V2[tam1] ;  
	
	for ( int i = 0 ; i < tam1 ; i++ )
     {
     	cout << "Insira um  valor para o primeiro vetor na posicao -- > " << i  << " valor -- > ";
     	cin  >> valor ;
     	V1[i] = valor ;
     	cout << "Agora insira um valor  para o segundo vetor na posicao -- >  "  << i  << " valor -- > "; 
     	cin  >> valor ;
		V2[i] = valor ;
	 }
	  tam2 = tam1 + tam1;
	  int V3[tam2];

	 for ( int i = 0 ; i < tam1 ; i++ )
	 {
	 	V3[i] = V1[i];
	 	V3[tam1 +  i ] = V2[i];
	 }
	 
	 for( int i = 0 ; i < tam2 ; i++)
	 {
	 	cout << "Terceiro vetor , " << "posicao -- > " << i << "  valor -- >  " << V3[i] << endl ; 
	 }
	
}

