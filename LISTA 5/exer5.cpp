#include<iostream>
#include<conio.h>

using namespace std;

int fibonacci(int q)
{
   int cont = 1;
  int anterior , atual, proximo;
  
  anterior = 0;
  atual = 1;
  proximo = 0;	
      	for(cont; cont <= q; cont++)
	{
	      cout<<"\t"<<proximo<<endl;
		proximo =  atual + anterior;
		anterior = atual;
		atual = proximo;
		
	}
}
int  main()
{   int q,resultado;
	cout<<"Escreva a quantidade de numeros desejadas -->";
	cin>>q;
	fibonacci(q);
	
	getch();
}

