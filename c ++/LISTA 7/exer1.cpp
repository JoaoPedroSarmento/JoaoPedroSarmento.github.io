#include<iostream>
#include<string.h>

using namespace std;


void Concatenacao ( char v1[] , char v2[] , string &texto1 , string texto2  ) {

    strcpy( v1 , texto1.c_str() ) ;
    strcpy( v2 , texto2.c_str() ) ;

    int tam1 = texto1.length() ;
     texto1 = "" ;

   for ( int i = 0 ; i < tam1  ; i++ )
       texto1 = texto1 +  v1[i] ;

   int tam2 = texto2.length();

   texto2 = "" ;

   for ( int i = 0 ; i < tam2  ; i++) 
    texto2 = texto2 + v2[i] ;
    
   texto1 = texto1 + " " + texto2 ;
}

int main () {

    string texto1 , texto2 ;

    cout << "Insira o primeiro texto -- > " ;
    getline( cin , texto1 );

    cout << "Insira o segundo texto -- > " ;
    getline( cin , texto2) ;

    int tam1 = texto1.length() , tam2 = texto2.length() ;

    char v1[tam1];

    char v2 [tam2] ;


   Concatenacao(v1,v2,texto1,texto2 );

   cout << texto1 ;
}
