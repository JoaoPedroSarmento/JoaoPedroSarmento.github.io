// 5 , 8 , 9 e 11

#include<iostream>
#include<conio.h>

using namespace std;


int main()
{
	int q;
	cout<<"Digite a quantidade dos alunos com menos de 1,70 m de altura --- > ";
    cin>>q;
   int i = 0 ; 
   int soma = 0;
   int media = 0;
   for(i; i < q ; i++)
   {
   	int id;
    cout<<"Informe a idade -- > ";
    cin>>id;
    soma = soma + id;
    media = soma / q;
   }
	cout<<"Media e --->"<<media;
	getch();
}
