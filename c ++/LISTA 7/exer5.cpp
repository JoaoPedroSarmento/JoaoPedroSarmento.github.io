#include<iostream>
#include<conio.h>
#include<string.h>
#include<ctype.h>
using namespace std ;

void  ToLower( int tam , char v[]  ) {
  for ( int i = 0 ; i < tam ; i = i + 1 ) 
      if ( v[i] != ' ') {
      v[i] = v[i] + 32;
    }
  
}

int main ( ) {

string t ;

 cout << "Escreva um texto -- > " ;
 getline( cin ,t ) ;

 int tam = t.length() ;

char v [tam] ;

strcpy(v,t.c_str());

 for ( int i = 0 ; i < tam ; i = i + 1 ) {
   v[i] = toupper(t[i]);

 }

 ToLower( tam , v );

 cout << v ;
}

