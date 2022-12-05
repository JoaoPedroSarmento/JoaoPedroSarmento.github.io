#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float RetornaAreaDoTriangulo(float l1 ,float l2 ,float Ang ) { 
	return       ( l1 * l2  * sin ( Ang )  )    / 2 ;
}

int main() { 
	
	float l1 , l2 ,  Ang , Retorno ;
	
	cout << "Digite o primeiro lado do triangulo\n\n" ;
	cin  >> l1 ;
	
	cout << "Digite o segundo  lado do triangulo\n\n" ;
	cin  >> l2  ;
	
	cout << " Insira o valor do angulo formado entre esses dois lados dos triangulos " ; 
	cin  >> Ang ;

	Retorno =  RetornaAreaDoTriangulo( l1 , l2 , Ang );
	
	cout << " O resultado e   :" << Retorno ;
}
