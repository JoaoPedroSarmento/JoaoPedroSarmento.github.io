#include<iostream>
#include<conio.h>
using namespace std;

int imc(float peso,float altura ) { 
	float IMC = peso/(altura*altura);
	
	return (IMC < 25) ?    0 : (IMC >= 25 && IMC < 30) ?   1 : (IMC >= 30 && IMC < 35)	?   2 :
	(IMC >= 35 && IMC < 40) ?  3 : -1  ;
	
	
	
}

int main()

{
	float p,a;
	int retorno;
	cout<<"Digite seu peso :\n";
	cin>>p;
	
	cout<<"Digite sua altura: \n";
	cin>>a;
	

	retorno = imc(p,a);
	
	switch(retorno) { 
		case 0 :
			cout << retorno << ", ausente de obesidade\n";
			break;
				case 1 :
			cout << retorno << ", sobrepeso\n";
			break;
			case 2 :
			cout << retorno << ", Obesidade grau I\n";
			break;
				case 3 :
			cout << retorno << ", obesidade grau II\n";
			break;
		
			break;
			default:
			cout << retorno << ", obesidade morbida\n";
	}
		getch();
}
