#include<iostream>
#include<conio.h>
using namespace std;

bool minuscula(char l) { 
   return (l >= 'a' && l <= 'z' ) ; 
}

bool maiuscula(char l) { 
   return  (l >= 'A' && l <= 'Z' ) ;
}

bool  letra (char l) {
 return  (l >='A' && l <='Z' || l >='a' && l <='z' ) ;
}

int vogal(char l) { 
    return ( ( l =='a' )  || ( l  == 'e' )  ||  ( l == 'i' )  || ( l =='o' )  || ( l =='u' )  || ( l =='A' )  || ( l == 'E' )  || ( l == 'I')  || (l =='O') 
	|| (l =='U' )  ) ; 
}

bool consoante(char l) { 
    return  (  ( l != 'a')  &&  ( l  != 'A')  &&  ( l != 'e') &&  ( l != 'E') &&   
            ( l != 'i')     &&  ( l != 'I')   &&  ( l != 'o')
            &&  ( l != 'O') &&  ( l != 'u')   &&  ( l != 'U')
            &&  !( l >= '1' && l <= '9' ));  
}


bool algarismo(char l) { 
    return  (  l >= '1' && l <= '9'  );
}

int main() { 
	int t;
	char carac;
	cout<<"Digite um caractere \n";
	cin>>carac;
	(minuscula(carac)) ?  cout<<"Esse caractere e uma letra minuscula\n" : cout<<"";	
	(maiuscula(carac)) ? cout<<"Esse caractere e uma letra maiuscula\n" : cout<<"";
 	(letra(carac)) ? cout<<"Esse caractere e uma letra\n" : cout<<"";
	(vogal(carac)) ? cout<<"Esse caractere e uma vogal \n" : cout<<"";
	(consoante(carac)) ? cout<<"Esse caractere e uma consoante \n" : cout<<"";
	(algarismo(carac)) ? cout<<"Esse caractere e um algarismo \n" : cout<<"";
	getch();
}
