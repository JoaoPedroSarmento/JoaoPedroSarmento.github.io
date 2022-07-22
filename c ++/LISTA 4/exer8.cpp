#include<iostream>

using namespace std;

int expressao(char z )
{
	if(z == '+') return 1;
	else
	if(z == '-') return 2;
    else
	if(z == '*' || z == 'x' || z =='X') return 3;
	else
	if(z == ':'|| z == '/') return 4;
	else  return 5;


  
	
}




int main()
{
 float x,y,retornando;
	char Z;
	
	cout<<"ENTRE COM O PRIMEIRO NUMERO ----->\n";
	cin>>x;
	
	cout<<"ENTRE COM O SEGUNDO NUMERO ----->\n";
	cin>>y;
	
	cout<<"ENTRE COM UM  OPERANDO     ----->\n";
	cin>>Z;
	
	switch(expressao(Z))
	{
		case 1 :
		cout<<"A soma entre esses numeros e equivalente a : "<<x+y;
		break;
		case 2 :
		cout<<"A subtracao entre esses numeros e equivalente a : "<<x-y;
		break;
		case 3 : 
		cout<<"A multiplicacao entre esses numeros e equivalente a : "<<x*y;
		break;
		case 4 :
		cout<<"A divisao  entre esses numeros e equivalente a : "<<x/y;
		break;
		default:
		cout<<Z<<" nao e um operando\n";
		
		
		
	}
}
