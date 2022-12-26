#include<iostream>
#include<conio.h>
using namespace std;

int IndicaMes( int mes ) { 
return ( mes == 1)  ?  1 : ( mes == 2)  ?   2  : ( mes == 3)  ?  3 :  ( mes == 4)  ?  4  :
       ( mes == 5)  ?  5 : ( mes == 6)  ?   6  : ( mes == 7)  ?  7 :  ( mes == 8)  ?  8  : 
       ( mes == 9)  ?  9 : ( mes == 10) ?   10 : ( mes == 11) ?  11 : ( mes == 12) ?  12 : -1;
}

int main() {
    
    int mes;
	cout<<"Digite um mes de acordo com seu numero (1 a 12 )";
	cin>>mes;

	switch(IndicaMes(mes)) { 
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
