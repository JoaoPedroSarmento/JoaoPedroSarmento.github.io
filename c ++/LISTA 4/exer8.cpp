#include<math.h>
#include<conio.h>
#include<iostream>

using namespace std;
float retorna(float n1, float n2, char  n3)
{
	if(n3 == '+')
	{
	cout<<n1<<"+"<<n2<<"="<<n1+n2;	

	}
	
	
		if(n3 == '*')
	{
	cout<<n1<<"*"<<n2<<"="<<n1*n2;	
	

	}
	
			if(n3 == '/')
	{
	cout<<n1<<"dividido por "<<n2<<"="<<n1/n2;	
	

	}
				if(n3 == ':')
	{
	cout<<n1<<":"<<n2;	
}
}


int main()
{
	float valo1,valo2;
	char valo3;
	cout<<"Digite um numero\n";
	cin>>valo1;
	
	cout<<"Digite um operando\n";
	cin>>valo3;
	
	cout<<"Digite outro numero\n";
	cin>>valo2;

    retorna(valo1,valo2,valo3);
    getch();
	
	
	
}
