#include<iostream>
#include<conio.h>
using namespace std;
int indetifica_operando(char operando)
{
	if(operando == '+') return 0;
	else
	if(operando == '-') return 1;
	else
	if(operando == '*'|| operando == 'x'|| operando ==  'X') return 2;
	else
	if(operando == '/' || operando ==  ':') return 3;
	
	
	
}


int main()
{
	 float n1,n2;
	 char op;

	cout<<"Digite o primeiro numero\n";
	cin>>n1;
	
	cout<<"Digite o segundo numero\n";
	cin>>n2;
	
	cout<< "Digite o operando\n";
	cout<<"  +\n ";
	cout<<" -\n ";
	cout<<" *\n ";
	cout<<" x\n ";
	cout<<" X\n ";
	cout<<" / \n ";
	cout<<" :\n ";
	cin>>op;
	
	switch(indetifica_operando(op))
	{
		case 0 : 
		cout<<"O valor da soma e "<<n1+n2;
		break;
		case 1 :
		cout<<"O valor da subtracao e : "<<n1-n2;
		break;
		case 2 :
		cout<<"O valor da multiplicacao e : "<<n1*n2;
		break;
		case 3 :
	    cout<<"O valor da divisao e : "<<n1/n2;
		break;
	    default :
		cout<<"ERRO\n";
		break;	
	}
	
	
}
