#include<iostream>
#include<conio.h>
using namespace std;


int  main()
{
  int q,cont;
  int anterior , atual, proximo;
  
  anterior = 0;
   atual = 1;
  proximo = 0;		
	cout<<"Escreva a quantidade de numeros desejadas -->";
	cin>>q;
	for(cont = 1; cont <= q; cont++)
	{
	      cout<<"\t"<<proximo<<endl;
		proximo =  atual + anterior;
		anterior = atual;
		atual = proximo;
		
	}
	getch();
}
