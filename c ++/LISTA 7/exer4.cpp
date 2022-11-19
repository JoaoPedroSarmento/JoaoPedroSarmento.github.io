#include<iostream>
#include<conio.h>
#include<string.h>
#include<ctype.h>
using namespace std ;

void  ToUpper( int tam , char v[]  ) {
  for ( int i = 0 ; i < tam ; i = i + 1 ) {
      v[i] = v[i] - 32;
    }
}

int main ( ) {

string t ;

 cout << "Escreva um texto -- > " ;
 getline ( cin , t ) ;


 int tam = t.length() ;

char v [tam] ;

strcpy(v,t.c_str());

 for ( int i = 0 ; i < tam ; i = i + 1 ) {
   v[i] = tolower(t[i]);
 }

 ToUpper( tam , v );

 cout << v ;
 getchar();
}
