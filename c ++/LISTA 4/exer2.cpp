#include<iostream>
#include<conio.h>
using namespace std;

int  fabs1(float n)
{
	bool retorno = false;
   (n < 0 ) ? retorno =   true : retorno =  false;
   return retorno;
}


int main()
{
	float n;
	cout<<"Digite um valor\n";
    cin>>n;
    switch(fabs1(n))
{
	case true : cout << n * (-1);
	break;
	default :
		cout << n;
}
    getch();
	
}
