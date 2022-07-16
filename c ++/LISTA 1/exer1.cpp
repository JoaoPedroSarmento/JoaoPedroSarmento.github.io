#include<iostream>
#include<conio.h>

using namespace std; 


void retorna_nome( string nome)

{
	
	cout<<"Seu nome e : "<<nome;
	
}


int main()

{
	string nome;
	
	cout<<"Digite seu nome\n";
        cin>>nome;
	retorna_nome(nome);
	getch();
		
	
	
	
}
