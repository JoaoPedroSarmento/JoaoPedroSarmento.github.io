#include<iostream>
#include<conio.h>
using namespace std;

int main()
{
	int q;
	int i = 1;
	float soma = 0;
	float  s = 0;
	cout<<"Digite a quantidade de funcionarios -->";
	cin>>q;
	float media = 0;
	for(i;i <= q;i++)
	 {
	  string n;
	  cout<<"Informe o nome do funcionario -->";
	  cin>>n;
	  cout<<" Informe seu salario ---> ";
	  cin>>s;
	  cout<<" NOME --> "<<n<<"  SALARIO --> "<<s;
	    cout<<endl;
	soma = soma + s;
	media = soma / q;
	}
	
	cout<<"A media do salario e equivalente a -->"<<media<<" r$ ";
	getch();
}
