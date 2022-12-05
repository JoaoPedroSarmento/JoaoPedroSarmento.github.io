#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float VolumeDoRaio(float r) { 
	
	const float  ra = 3.141592; 
        return 4/3 * ra  * pow(r,3);             
}

int main() { 
	
	float Raio , Volume;
	
	cout << "Digite o valor do raio\n\n" ;
	cin  >> Raio;
	
	Volume =  VolumeDoRaio(Raio);
	
	cout<<r<< " O volume do raio e  :" << Volume ;
	
	
	
}
