#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float retorna_delta(float a,float b, float c) { 
	float delta;
	
	delta =  (pow(b,2) ) -(4 * a *c  );
	
	return delta;
}
 
 
 int main() { 
 	
	 float a , b   , c , Retorn ;
 	 
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
