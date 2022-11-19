#include<iostream>
#include<conio.h>
#include<string.h>
using namespace std;



 int comparaTexto(string t1 , string t2) {

   int Tam = t1.length();
   int Tam2 = t2.length();

   char v1 [Tam];
    char v2[Tam2];
   strcpy(v1, t1.c_str());
   strcpy(v2, t2.c_str());

    int TamV1 = strlen(v1);
    int Tamv2 = strlen(v2);

    if ( TamV1 > Tamv2 ) return 1;
    else
      if ( Tamv2 > TamV1 ) return -1;

    return 0;

}




int main () {


string t1,t2;



cout << "Insira  o primeiro texto --> ";
cin  >> t1;

cout << "Insira o segundo texto --> ";
cin  >> t2;


 int resultado = comparaTexto (t1,t2);


 if ( resultado == 1) cout << " O primeiro texto e maior q o segundo";
 else
  if ( resultado == -1 ) cout << " O segundo texto e maior que o segundo ";

  else
    cout << " Os textos possuem o mesmo tamanho " ;



}
