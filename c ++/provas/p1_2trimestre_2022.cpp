#include<iostream>
#include<conio.h>

using  namespace std;
    
	const int pedra = 0;
    const int papel = 5;
    const int tesoura = 2;


int pedraPapelTesoura (int mao1, int mao2)
{


	if( (mao1 ==  tesoura &&  mao2 ==  papel )  || (mao1 == papel && mao2 == pedra )  ||  ( mao1 == pedra  && mao2 == tesoura  ) ) return 1;
	else
   	if( (mao2 == tesoura  && mao1 ==  papel )    ||  (mao2 == papel && mao1 == pedra ) || (  mao2 == pedra  && mao1 == tesoura  ) ) return 2;
   	else
    if ( ( mao2 == tesoura && mao1 == tesoura ) || ( mao2 == papel && mao1 == papel ) ||( mao2 == pedra && mao1== pedra )  )    return 0;
   
   else 
   return -1;  /*Coloquei isso para caso o usuário digitar um número que não seja 0,5,2 ass : João Pedro  */

}
int main()
{

 
 int mao1, mao2, resultado;
 cout << "*******************************\n";
 cout << "* JOGO PEDRA, PAPEL E TESOURA *\n";
 cout << "*******************************\n\n";
 cout << "SIMBOLOS DO JOGO:\n";
 cout << "0 --> PEDRA\n\n";
 cout << "2 --> TESOURA\n\n";
 cout << "5 --> PAPEL\n\n";
 cout << "INSIRA A MAO DO JOGAROR 1: ";
 cin >> mao1;
 cout << "INSIRA A MAO DO JOGAROR 2: ";
 cin >> mao2;
 resultado = pedraPapelTesoura (mao1,  mao2);
  switch(resultado)
  {
  	case 1 :
  		cout<<"JOGADOR 1 venceu!";
  		break;
  		case 2  :
  		cout<<"JOGADOR 2 venceu!";
  		break;
  		 case 0 :
  		cout<<"EMPATE";
  		break;
     	default : 
  		cout<<"VALORE[s] ERRADO[s]";
  		break;
  	
  }
  
 getch();
} 
