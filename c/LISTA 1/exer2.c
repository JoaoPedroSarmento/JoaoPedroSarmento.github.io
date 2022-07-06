#include<stdio.h> //comando printf está presente nessa biblioteca
#include<conio.h> //comando getch esta sendo incluido no programa 
#include<string.h>
#include<stdlib.h>

void retorna_tudo(char  * nome,int dia,int mes,int ano, float  s,char * s_ou_n)

{
	printf("Seu nome e : %s",nome,"\n\n");
	printf("\n");
	printf("Voce nasceu em %d,%d,%d",dia,mes,ano,"\n\n");
	printf("\n");
	printf("Seu salario e : %f",s,"\n\n");
	printf("\n");
	printf("sua condicao de chefia e : %s",s_ou_n);
	printf("\n");
    
}


int main()

{
	 char * nome;
	int dia,mes,ano;
	float s;
	char *  s_ou_n;
	 printf("Digite seu nome\n");
     nome = (char  *) malloc(sizeof(char)); 
    scanf( "%s",nome);
    
     printf("Digite o dia do seu nascimento\n");
     scanf("%d",&dia);
    
    
      printf("Digite o mes do seu nascimento\n");
     scanf("%d",&mes);
    
    printf("Digite o ano  do seu nascimento\n");
     scanf("%d",&ano);
    
    
   printf("Digite seu salario\n\n");
   scanf("%f",&s);
    
	
	 s_ou_n = (char  *) malloc(sizeof(char));
    printf("Condicao de chefia [s]im ou  [n]ao");
	scanf("%s",s_ou_n);
    
    
    
    
	retorna_tudo(nome,dia,mes,ano,s,s_ou_n);
	getch();
		
	
	
	
}
