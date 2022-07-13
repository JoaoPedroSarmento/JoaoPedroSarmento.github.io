#include<iostream>
#include<conio.h>

using namespace std;

void maior(float x, float y )
{
	if(x > y )
	{
		
		cout<<"O maior entre eles e : "<<x<<"\n\n";
	}
	
	if ( y > x)
	{
		
		cout<<"O maior entre eles e : "<<y<<"\n\n";
	}
	
	
}


void maior3(float X ,float Y , float z )
{

	if(X < z || Y < z)
	{
		
		cout<<"  o maior entre eles e "<<z<<"\n";
	}
	if(X > z || Y > z){
		maior(X,Y);
		
	}
	else{
		
		cout<<"Os numeros sao iguais\n";
	}
	
	
	
}

int main()
{
	float n,n1, n2;
	cout<<"Digite o  primeiro numero\n\n";
	cin>>n;
	
		cout<<"Digite o  segundo numero\n\n";
	cin>>n1;
	
		cout<<"Digite o   terceiro numero\n\n";
	cin>>n2;
	maior3(n,n1,n2);
	
	
}
