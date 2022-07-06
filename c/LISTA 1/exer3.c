#include<stdio.h> 
#include<stdlib.h>
#include<conio.h>


void retorna_sobrenome( char  nome, char  sobrenome)

{
	
  printf("%s",sobrenome,",  %s.",nome);
	
}


int main()

{
	char * nome,  * sob;
	
	printf("Digite seu nome\n");
    nome = (char  *) malloc(sizeof(char));
	scanf(&nome);
   	printf("Digite seu sobrenome\n");
    sob = (char  *) malloc(sizeof(char));
	scanf(&sob);
	retorna_sobrenome(nome,sob);
	getch();
		
	
	
	
}
