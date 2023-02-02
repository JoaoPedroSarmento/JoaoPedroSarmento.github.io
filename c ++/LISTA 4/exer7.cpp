#include<iostream>
#include<conio.h>
using namespace std;
int PosicaoDaLetra(char carac) { 
	// Obs : Poderia ser feito com casting, mas na época eu ainda não tinha aprendido.
	 return  (carac == 'a' || carac == 'A') ?  1 : 	( carac == 'b' || carac =='B') ?  2  : 	( carac == 'c' || carac =='C')   ?  3 : 
	         (carac ==  'd' || carac == 'D')?   4 : (carac == 'e'|| carac == 'E') ?  5 : 	(carac == 'f' || carac =='F')  ? 6 : 	
	         (carac == 'g' || carac =='G')  ?   7 :  (carac == 'h' || carac =='H') ? 8 : (carac == 'i' || carac =='I')  ? 9 :
	    	 (carac == 'j' || carac =='J')  ? 10 :  (carac == 'k' || carac =='K')  ? 11 : (carac == 'l' || carac =='L') ? 12 :
	         (carac == 'm' || carac =='M')  ?  13 :  (carac == 'n' || carac =='N')  ?  14 :  (carac == 'o' || carac =='O')  ? 15 : 
         	 (carac == 'p' || carac =='P')  ?  16:  (carac == 'q' || carac =='Q') ? 17 : (carac == 'r' || carac =='R')  ?  18 :
        	 (carac == 's' || carac =='S')  ?  19 :  (carac == 't' || carac =='T')  ?  20 : (carac == 'u' || carac =='U')  ?  21 : 
		 (carac == 'v' || carac =='V')  ?  22 :  	(carac == 'w' || carac =='W') ?  23 : (carac == 'x' || carac =='X') ?  24 :
         	 (carac == 'y' || carac =='Y')  ?  25 : (carac == 'z' || carac =='Z')  ? 26  : 27;
	
}

int main() { 
    char letra;
    cout << "Digite uma letra";
    cin >> letra;
   
   int posicao =  PosicaoDaLetra(letra);
   (posicao >= 1 && posicao <= 26 ) ?  cout << " A letra " << letra << "  esta na posicao " << posicao << " do alfabeto" : cout << "isso nao e uma letra\n";
   getch();
}
