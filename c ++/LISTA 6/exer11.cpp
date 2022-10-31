#include<iostream>
#include<conio.h>

using namespace std;

 
 int main () {
 	
	int tam, valor; 
	
	float v1[tam] [tam] , ResultadoMedia = 0;
	    
    cout << "Insira o tamanho do primeiro vetor e matriz -- > "; 
    cin  >> tam ;
    
    float media  = tam * tam;
    
    for ( int i = 0 ; i < tam ; i++) {
    	for ( int j = 0 ; j < tam ; j++) {
    		
			cout << "Insira o valor , linha -- > " << j << " coluna -- > " << i ; 
    		cin  >> valor ;
    		
    		v1[i] [j] = valor;
    		ResultadoMedia = ResultadoMedia + valor;	
    		
		}
	}	
	 
	  media = ResultadoMedia/media;
	  
	 cout << "A media dessa matriz e -- > " << media ;
	 
	 getch();
 }
