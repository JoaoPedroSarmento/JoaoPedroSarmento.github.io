#include<iostream>
#include<conio.h>

using namespace std;

int fibonacci(int q) { 
  
  int cont = 1;
  int anterior , atual, proximo;
  anterior = 0;
  atual = 0;
  proximo = 1;	
	
 	for(cont; cont <= q; cont++) { 
	     	 cout << "\t" << atual << endl;
		 proximo =  proximo + anterior;
		 anterior = atual;
		 atual = proximo;
		
 	}
}
int  main() { 
	
	int q,resultado;
	cout << "Sequencia fibonacci \n";
	cout << "Escreva a quantidade de numeros desejadas -->";
	cin  >> q;
	fibonacci(q);
	getch();
}

