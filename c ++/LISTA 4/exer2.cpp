#include<iostream>
#include<conio.h>


using namespace std;

void fabs1(float n)
{
	if ( n < 0   )
	{
		cout<<n * (-1);
		
		
	}
	
	else{
		
		cout<<n;
	}
	
}


int main()
{
	float n;
	cout<<"Digite um valor\n";
    cin>>n;
    fabs1(n);
    getch();
	
	
	
	
}
