#include<iostream>
#include<conio.h>

using namespace std; 


void MostraNome( string nome) { 
	cou t<< "Seu nome e : " << nome ; 
}


int main() { 
	
	string nome;
	
	cout << "Digite seu nome\n";
        
	cin >> nome;
	
	MostraNome(nome);

	getch();
		
}
