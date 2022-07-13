#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

void imc(float p , float a)
{
	float IMC =  p/pow(a,2);

	
	if(IMC < 25 )
	cout<<"AUSENTE\n";
	
		if(IMC >= 25 && IMC < 30 )
	cout<<"Sorepeso\n";
	
	
		if(IMC >= 30 && IMC < 35 )
	cout<<"Obseidade grau I \n";
	
		if(IMC >= 35 && IMC < 40 )
	cout<<"Obseidade grau II \n";
		
			if(IMC >= 40  )
	cout<<"Obseidade Morbida  \n";
	
	
	
}

int main()
{
	float P , A;
	
	cout<<"Digite seu peso : \n";
	cin>>P;
	
	cout<<"Digite sua altura :\n ";
	cin>>A;
	
	imc(P,A);
	
	getch();
	
	
}

