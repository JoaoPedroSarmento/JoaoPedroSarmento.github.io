#include<stdio.h> //comando printf está presente nessa biblioteca
#include<conio.h> //comando getch esta sendo incluido no programa 
#include<string.h>



void retorna_nome( char *  nome)

{
	
	 printf("Seu nome e :  %s.",nome);
	
}


int main()

{
      char * nome;// * declara uma variavel do tipo texto
	
	printf("Digite seu nome\n");
     nome = (char  *) malloc(sizeof(char)); 
    scanf( "%s",nome);
	retorna_nome( nome);
	
	getch();
		
	
	
	
}
