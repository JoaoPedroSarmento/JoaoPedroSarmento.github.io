#include<iostream>
#include<conio.h>
using namespace std;

int IndicaMes( int mes )
{
	int resultado = -1;
( mes == 1)  ? resultado =  1 : resultado;
( mes == 2)  ? resultado =  2 : resultado;
( mes == 3)  ? resultado =  3 : resultado;
( mes == 4)  ? resultado =  4 : resultado;
( mes == 5)  ? resultado =  5 : resultado;
( mes == 6)  ? resultado =  6 : resultado;
( mes == 7)  ? resultado =  7 : resultado;
( mes == 8)  ? resultado =  8 : resultado;
( mes == 9)  ? resultado =  9 : resultado;
( mes == 10) ? resultado =  10: resultado;
( mes == 11) ? resultado =  11: resultado;
( mes == 12) ? resultado =  12: resultado;
return resultado;
}

int main()
{
	int mes;
	cout<<"Digite um mes de acordo com seu numero (1 a 12 )";
	cin>>mes;

	switch(IndicaMes(mes))
	{
	case 1:
			cout<<"JANEIRO";
			break;
			case 2 :
				cout<<"FEVEREIRO";
				break;
			case 3:
			cout<<"MARCO";
			break;
			case 4 :
				cout<<"ABRIL";
				break;
			case 5:
			cout<<"MAIO";
			break;
			case 6 :
				cout<<"JUNHO";
				break;
			case 7:
			cout<<"JULHO";
			break;
			
					case 8:
			cout<<"AGOSTO";
			break;
			case 9 :
				cout<<"SETEMBRO";
				break;
					case 10:
			cout<<"OUTUBRO";
			break;
			case 11 :
				cout<<"NOVEMBRO";
				break;
		      case 12 : 
			  cout<<"DEZEMBRO";
			  break;
			  default :
			  
			  cout<<"Isso nao e um mes ";
		}
		
		getch();
	}
