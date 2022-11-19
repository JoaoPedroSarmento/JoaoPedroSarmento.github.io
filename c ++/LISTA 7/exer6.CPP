#include<iostream>

using namespace std;

void TabelaAscII () {

 char Simbolos ;

 for ( int i = 0 ; i < 255 ; i = i + 1 ) {

    cout <<  i  << " simbolo " << Simbolos  << "\n";
    Simbolos ++;

 }



}

int main () {

cout << "MOSTRANDO TABELA ASC|| : ";
TabelaAscII();
}
