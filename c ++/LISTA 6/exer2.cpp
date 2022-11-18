#include<iostream>
using namespace std;

int main ()
{
	int tamL1 , tamL2;
    int valor ;
	cout << "Insira o tamanho da linha do primeiro  vetor -- > " ;
	cin  >> tamL1  ;

    cout << "Insira o tamanho da linha do segundo  vetor -- > " ;
	cin  >> tamL2 ;
	int v1[tamL1] , v2[tamL2] ;
	int tam = 0 ;
	int v3[tamL1] ;

	for ( int i = 0 ; i < tamL1 ; i++ ){
        cout << "Insira o valor do primeiro vetor  -- > linha -- > " << i ;
        cin  >> valor ;

        v1[i] = valor ;
	}

		for ( int i = 0 ; i < tamL2 ; i++ ){
        cout << "Insira o valor do segundo vetor  -- > linha -- > " << i ;
        cin  >> valor ;

        v2[i] = valor ;
	}

  if ( tamL1 > tamL2 ) {
    for ( int i = tamL2 ; i < tamL1 ; i++ ){
        v2[i] = 0 ;
    }
    for ( int i = 0 ; i < tamL1 ; i++ ) {
        v3[i] = v1[i] + v2[i];
    }
    for ( int i = 0 ; i < tamL1 ; i++ ){
    cout << v3[i] << endl ;
   }
  }

  else {
     for ( int i = tamL1 ; i < tamL2 ; i++ ){
        v1[i] = 0 ;
    }
  float soma = 0 ; 
      for ( int i = 0 ; i < tamL2 ; i++ ) {
        soma = soma + v1[i] + v2[i];
    }
   cout << soma ; 

  }


}
