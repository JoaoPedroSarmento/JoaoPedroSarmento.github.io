#include<iostream>
#include<conio.h>

using namespace std; 


void MostraDados( string nome ,int dia ,int mes ,int ano ,float s ,char CondicaoDeChefia) { 
	
	cout << "Seu nome e : " << nome << "\n\n";
	
	cout << "Voce nasceu em " <<dia << "/" << mes << "/" << ano << "\n\n" ;
	
	cout << "Seu salario e : " << s << "\n\n";
	
	cout << "sua condicao de chefia e : " << ComdicaoDeChefia;
}


int main() { 
	
    string nome;
    int dia,mes,ano;
    float salario;
    char CondicaoDechefia ; 
	
    cout << "Digite seu nome\n";
    cin  >> nome;
    
    cout << "Digite o dia do seu nascimento\n";
    cin  >> dia;
    
    
    cout << "Digite o mes do seu nascimento\n";
    cin  >> mes;
    
    cout << "Digite o ano do seu nascimento\n";
    cin  >> ano;
    
    
    cout << "Digite seu salario :\n";
    cin  >> salario;
    
    cout << "Condicao de chefia [s]im ou  [n]ao";
    cin >>  CondicaoDeChefia;
    
    MostraDados(nome,dia,mes,ano,s,CondicaoDeChefia);
    getch();
}
