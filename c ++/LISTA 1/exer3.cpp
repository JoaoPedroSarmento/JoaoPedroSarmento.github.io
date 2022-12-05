#include<iostream>
#include<conio.h>

using namespace std; 


void MostraSobrenomeENome( string nome, string sobrenome) { 
	
	cout << sobrenome << "," << nome;
}


int main() { 
	
	string nome,sobrenome ; 	
       cout << "Digite seu nome\n";
       cin  >> nome;
       cout << "Digite seu sobrenome\n";
       cin  >> sobrenome;
 
	MostraSobrenomeENome (nome , sobrenome );
	getch();
}
