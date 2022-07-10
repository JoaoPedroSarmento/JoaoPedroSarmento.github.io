#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

int main()
{
	int  mes;
	cout<<"Digite um o mes do seu nascimento\n";
	cin>>mes;
	
	switch(mes)
	{
	
	case  1:
		cout<<"Mes que voce nasceu :  janeiro\n";
		
		break;
		
		case 2 :
		cout<<"Mes que voce nasceu :  fevereiro\n";
		break;
		
			case 3 :
		cout<<"Mes que voce nasceu :  marco\n";
		break;
			case 4 :
		cout<<"Mes que voce nasceu : abril\n";
		break;

					case 5 :
		cout<<"Mes que voce nasceu : maio\n";
		break;
				case 6 :
		cout<<"Mes que voce nasceu : junho\n";
		break;

		case 7 :
		cout<<"Mes que voce nasceu : julho\n";
		break;
		
				case 8 :
		cout<<"Mes que voce nasceu : agosto\n";
		break;
		
				case 9 :
		cout<<"Mes que voce nasceu : setembro\n";
		break;
				case 10:
		cout<<"Mes que voce nasceu : outubro\n";
		break;
		case 11 :
		cout<<"Mes que voce nasceu : novembro\n";
		break;
				case 12:
		cout<<"Mes que voce nasceu : dezembro\n";
		break;
     default :
     	cout<<"Isso nao e um mes\n";
     
	 }
   getch();
	
}




