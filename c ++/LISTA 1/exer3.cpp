#include<iostream>
#include<conio.h>

using namespace std; 


void retorna_sobrenome( string nome, string sobrenome)

{
	
	cout<<sobrenome<<","<<nome;
	
}


int main()

{
	string nome,sob;
	
	cout<<"Digite seu nome\n";
    cin>>nome;
   	cout<<"Digite seu sobrenome\n";
    cin>>sob;
    
	retorna_sobrenome(nome,sob);
	getch();
		
	
	
	
}
