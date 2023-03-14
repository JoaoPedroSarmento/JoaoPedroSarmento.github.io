#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float retorna_delta(float a,float b, float c) { 
	 return (pow(b,2) ) -(4 * a *c  );
}
 
 
 int main() { 
 	
	 float a , b   , c , Retorno;
 	 
 	cout << "Digite o valor de a:\n\n" ;
 	cin  >> a;
 	
 	cout << "Digite o valor de b:\n\n" ;
 	cin  >> b;
      	
      	
        cout << "Digite o valor de c:\n\n";
 	cin  >> c ;
    
      	Retorno = retorna_delta(a,b,c);
	
    	cout << "O valor de delta e : "  << Retorno;  	
    	
	getch();  	
   
 	
 }
