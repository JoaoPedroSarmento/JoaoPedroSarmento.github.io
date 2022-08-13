#include<iostream>
#include<conio.h>
using namespace std;

int main()
{
	 float c = 1.50;
	float ze = 1.10;
	int tempo = 1;
	for( tempo; ze <= c; tempo++)
	{
	  cout<<"Ano : "<<tempo<<endl;
	  ze = ze + 0.03;
	  c = c  + 0.02;
	  cout<<"Altura de ze "<<ze<<" Ano : "<<tempo<<endl;
      cout<<"Altura de chico "<<c<<" Ano : "<<tempo<<endl;
      
	}
	 	cout<<"Tempo demorado ---> "<<tempo -1 <<" anos \n"<<" Altura de ze : "<<ze<<" \n"<<" Altura de chico : "<<c;
	 	getch();
}
