#include<iostream>
#include<conio.h>

using namespace std; 


void retorna_dados( string nome,int dia,int mes,int ano,float s,char s_ou_n)

{
	cout<<"Seu nome e : "<<nome<<"\n\n";
	
	cout<<"Voce nasceu em "<<dia<<"/"<<mes<<"/"<<ano<<"\n\n";
	
	cout<<"Seu salario e : "<<s<<"\n\n";
	
	cout<<"sua condicao de chefia e : "<<s_ou_n;
}


int main()

{
	string nome;
	int dia,mes,ano;
	float s;
	char s_ou_n;
	cout<<"Digite seu nome\n";
    cin>>nome;
    
    cout<<"Digite o dia do seu nascimento\n";
    cin>>dia;
    
    
    cout<<"Digite o mes do seu nascimento\n";
    cin>>mes;
    
    cout<<"Digite o ano do seu nascimento\n";
    cin>>ano;
    
    
    cout<<"Digite seu salario :\n";
    cin>>s;
    
    cout<<"Condicao de chefia [s]im ou  [n]ao";
    cin>>s_ou_n;
    
    
    
    
	retorna_dados(nome,dia,mes,ano,s,s_ou_n);
	getch();
		
	
	
	
}
