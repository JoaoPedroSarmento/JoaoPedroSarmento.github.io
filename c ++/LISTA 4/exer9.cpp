#include<iostream>

using namespace std;

int meses( int mes )
{
	if( mes == 1) return 1;
	
	else 
	if(mes == 2) return 2;
	
		else 
	if(mes == 3) return 3;
		else 
	if(mes == 4 ) return 4;
		else 
	if(mes == 5) return 5;
		else 
	if(mes == 6) return 6;
		else 
	if(mes == 7) return 7;
		else 
	if(mes == 8 ) return 8;
		else 
	if(mes == 9 ) return 9;
		else 
	if(mes == 10) return 10;
		else 
	if(mes == 11 ) return 11;
		else 
	if(mes == 12) return 12;
	else
	return  -1;
}

int main()
{
	int mes;
	cout<<"Digite um mes de acordo com seu numero (1 a 12 )";
	cin>>mes;

	switch(meses(mes))
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
		
		
	}
	
	

