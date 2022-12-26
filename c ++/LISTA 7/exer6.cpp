#include<iostream>

using namespace std;

char TabelaAscII ( int i  , char &s ) {

 char Simbolos ;

 Simbolos = i;

 s = Simbolos ;

}

int main () {

cout << "MOSTRANDO TABELA ASC|| : ";


int i = 1 ;

char s ;
for ( i ; i < 255 ; i = i + 1 ) {
     s = TabelaAscII(i , s );
    cout << i << " - >  "  << s  << endl ;
}
}
