#include<iostream>
#include<string.h>
using namespace std;


int Strlen(int tam , string t  ) { 

char v [tam] ;

 strcpy(v,t.c_str());

 int c = 0;

for ( int i = 0; v[i] != '\0'; i++ ) 
 c++;
 
return c ;

}




int main() { 
 
int tam, tam2;
string texto1, texto2;
cout << "Insira um texto que será armazenado em um vetor -- >  ";
cin >> texto1;

tam = texto1.length();


cout  << "Tamanho do vetor -- > " << Strlen(tam,texto1);

}
