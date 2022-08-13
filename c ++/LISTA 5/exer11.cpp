#include<iostream>
#include<math.h>
#include<conio.h>
using namespace std;

int main()
{
	int r;
	int n;
    cout<<"Digite um numero inteiro --- > ";
    cin>>n;
    int c =  sqrt(n);
    int result = sqrt(n) * c ;
	cout << "O maior quadrado menor ou igual a " << n << " e -->" <<result<<"\n";
	cout<<"Deseja digitar mais quantos numeros ?";
	cin>>r;
	for(int i = 1; i <= r; i++)
	{
	int c =  sqrt(n);
    int result = sqrt(n) * c ;
	cout<<"Informe um numero inteiro --- > \n\n";
    cin>>n;
	cout << "O maior quadrado menor ou igual a " << n << " e -->" <<result<<"\n\n";
	
	}
  
    getch();
}
