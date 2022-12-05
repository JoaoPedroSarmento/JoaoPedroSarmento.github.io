 #include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;

float AngulosEmRadianos(float angulo ) { 
	
	const float  pi = 3.141592; 
	
	return  pi * angulo /180; 
}

int main( ) { 
	float angulo , AngRadianos;
	
	cout << "Digite o valor do angulo\n\n" ;
	cin >> angulo ;
	
	AngRadianos = AngulosEmRadianos( angulo );
	
	cout << angulo << " O angulo em radianos e   :" << AngRadianos ;
}
