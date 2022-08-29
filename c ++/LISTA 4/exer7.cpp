#include<iostream>
#include<conio.h>
using namespace std;
int PosicaoDaLetra(char l)
{
	int retorno = 0;
	(l == 'a' || l == 'A') ? retorno = 1 : retorno;
 
	( l == 'b' || l =='B')  ? retorno = 2 : retorno;
	 
	( l == 'c' || l =='C')   ? retorno = 3 : retorno;
	
	(l ==  'd' || l == 'D')  ? retorno = 4 : retorno;
	
	(l == 'e'|| l == 'E') ? retorno = 5 : retorno;
	
	(l == 'f' || l =='F')  ? retorno = 6 : retorno;
		
	(l == 'g' || l =='G')  ? retorno = 7 : retorno;
		 
	(l == 'h' || l =='H') ? retorno = 8 : retorno;
	
	(l == 'i' || l =='I')  ? retorno = 9 : retorno;
	
	(l == 'j' || l =='J') ? retorno = 10 : retorno;
	
	(l == 'k' || l =='K')  ? retorno = 11 : retorno;

	(l == 'l' || l =='L')  ? retorno = 12 : retorno;
	
	(l == 'm' || l =='M') ? retorno = 13 : retorno;
	 
	(l == 'n' || l =='N')  ? retorno = 14 : retorno;
	
	(l == 'o' || l =='O')  ? retorno = 15 : retorno;
	
	(l == 'p' || l =='P')  ? retorno = 16: retorno;
	 
	(l == 'q' || l =='Q') ? retorno = 17 : retorno;

	(l == 'r' || l =='R')  ? retorno = 18 : retorno;

	(l == 's' || l =='S') ? retorno = 19 : retorno;
	
	(l == 't' || l =='T')  ? retorno = 20 : retorno;
	
	(l == 'u' || l =='U')  ? retorno = 21 : retorno;
		
	(l == 'v' || l =='V')  ? retorno = 22 : retorno;
	 
	(l == 'w' || l =='W')  ? retorno = 23 : retorno;
	
	(l == 'x' || l =='X') ? retorno = 24 : retorno;
	
	(l == 'y' || l =='Y')  ? retorno = 25 : retorno;
	
	(l == 'z' || l =='Z')  ? retorno = 26  : retorno;
	
	 return retorno;
}
int main()
{
    char letra;
	cout<<"Digite uma letra";
	cin>>letra;
   
   int posicao =  PosicaoDaLetra(letra);

	(posicao >= 1 && posicao <= 26 ) ?  cout << " A letra " << letra << "  esta na posicao " << posicao << " do alfabeto" : cout << "isso nao e uma letra\n";
   getch();
}
