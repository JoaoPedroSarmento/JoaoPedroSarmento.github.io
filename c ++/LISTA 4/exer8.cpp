#include<iostream>
#include<conio.h>

using namespace std;

int calcula(float x, float z)
{
	int  retorno = 0;
	if(x  =='+'|| x =='x'||x =='X'|| x =='-'||x =='/'|| x =='*'|| x ==':') 

     return retorno;

	else
		if(z  =='+'|| z =='x'|| z =='X'|| z =='-'||z =='/'|| z =='*'|| z ==':') 
	
	 return retorno;
		else
		
		retorno = 1;

	return retorno;
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
	
	retornando = calcula(x,y);
	
	switch(Z)
	{
		case '+' :
			cout<<"A soma entre esses numeros e equivalente a : "<<x+y;
			break;
			case '-' :
			cout<<"A subtracao entre esses numeros e equivalente a : "<<x-y;
			break;
					case 'x' :
							case 'X' :
									case '*' :
				cout<<"A multiplicacao entre esses numeros e equivalente a : "<<x*y;
			break;
						case '/' :	
						case ':' :
				cout<<"A divisao  entre esses numeros e equivalente a : "<<x/y;
			break;
				default:
					cout<<"Isso nao e um operando\n";
		
	
		
	}
	
	
	
	
	
	
	
	
}
