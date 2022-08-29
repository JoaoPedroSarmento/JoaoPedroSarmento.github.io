#include<iostream>
#include<conio.h>

using namespace std;

float MaiorEntreDoisNumeros(float x, float y )
{
 float retorno = 0;
 return (x >= y) ? retorno = x : retorno = y ; 
}

float  MaiorEntreTresNumeros(float x ,float y , float z )
{
  float retorno =  MaiorEntreDoisNumeros(x,y);
  return  (retorno > z ) ?  retorno  : z; 	
}

int main()
{
	float n,n2, n3,resultado;
 	cout<<"Digite o  primeiro numero\n";
	cin>>n;
	cout<<"Digite o  segundo numero\n";
	cin>>n2;
	(MaiorEntreDoisNumeros(n,n2)) ? cout << n << " e o maior entre os dois numeros\n " : cout << n2 << " e o maior entre os dois numeros\n";
	cout<<"Digite o   terceiro numero\n";
	cin>>n3;
	resultado =   MaiorEntreTresNumeros(n,n2,n3);
   ( MaiorEntreTresNumeros(n,n2,n3) ) ?  cout << resultado << " e o maior entre os tres numeros\n " : cout << "";

}
