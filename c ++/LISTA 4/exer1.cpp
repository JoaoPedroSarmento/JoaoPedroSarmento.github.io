#include<iostream>
#include<conio.h>
using namespace std;
bool minuscula(char carac){
	return carac >= 'a' && carac <= 'z';
}
bool maiuscula(char carac){
	return carac >= 'A' && carac <= 'Z';
}
bool letra(char carac){
	return minuscula(carac) || maiuscula(carac);
}
bool vogal(char carac){
	return (carac == 'a') || (carac == 'e' )|| (carac == 'i') || (carac == 'o' )|| (carac == 'u') || 
	(carac == 'A') || (carac == 'E') || (carac == 'I') || (carac == 'O' )|| (carac == 'U');
}
bool consoante (char carac){
	return letra(carac) && !(vogal(carac));
}
bool algarismo (char carac){
	return carac >= '0' && carac <= '9';
}
int main() { 
	int t;
	char carac;
	cout<<"Digite um caractere \n";
	cin>>carac;
	(minuscula(carac)) ? cout << "Esse caractere e uma letra minuscula\n" :
	(maiuscula(carac)) ? cout <<"Esse caractere e uma letra maiuscula\n" : cout << "";
 	(letra(carac)) ?     cout <<"Esse caractere e uma letra\n" : cout << "";
	(vogal(carac)) ?     cout <<"Esse caractere e uma vogal \n" : 
	(consoante(carac)) ? cout <<"Esse caractere e uma consoante \n" : 
	(algarismo(carac)) ? cout <<"Esse caractere e um algarismo \n" : cout << "";
	getch();
}
