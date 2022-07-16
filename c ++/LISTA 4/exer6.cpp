#include<iostream>
#include<conio.h>
using namespace std;

int imc(float peso,float altura )
{
	float IMC = peso/(altura*altura);
	
	if(IMC < 25) return 0;
	
	else
	
	if(IMC >= 25 && IMC < 30) return 1;

	else 

	if(IMC >= 30 && IMC < 35)	return 2;

	else
	
	if(IMC >= 35 && IMC < 40) return 3;

	
	else return 4;
	
	
	
	
	
	
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
	
	switch(retorno)
	{
		case 0 :
			cout<<retorno<<", ausente de obesidade\n";
			break;
				case 1 :
			cout<<retorno<<", sobrepeso\n";
			break;
			case 2 :
			cout<<retorno<<", Obesidade grau I\n";
			break;
				case 3 :
			cout<<retorno<<", obesidade grau II\n";
			break;
		
			break;
			default:
			cout<<retorno<<", obesidade morbida\n";
	}
	

		getch();
	
}


