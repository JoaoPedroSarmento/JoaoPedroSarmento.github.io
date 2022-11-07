#include<iostream>


using namespace std ;
 int main () {

    int tamL  , tamC , valor ;

    cout << "Insira a quantidade de linhas desse vetor -- > " ;
    cin  >> tamL ;

    cout << "Insira a  quantidade de colunas desse vetor -- > " ;
    cin  >> tamC;

    float v [tamL] [tamC] ;

    for ( int i = 0 ; i < tamC ; i++ ) {
        for ( int j = 0 ; j < tamL ; j++ ){
            cout << "Insira um valor -- > coluna -- > " << i << " linha -- > " << j << endl ;
            cin  >> valor ;

            v [j] [i] = valor ;
        }

}

   for( int i =  0 ; i < tamL ; i++  ) {
    for ( int j = 0 ; j < tamC ; j++ ) {
        cout << v [i] [j] << "  " ;
    }
    cout << endl ;
   }
 }
