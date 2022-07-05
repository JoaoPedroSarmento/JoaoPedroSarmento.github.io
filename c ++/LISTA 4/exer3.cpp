#include<conio.h>
#include<iostream>

using namespace std;

bool divisivel (int numero1,int numero2)
{
  bool retorno;
  retorno = false;
  
  if( numero1 % numero2  == 0   )
  {
  	
  	retorno = true;
  }
	return retorno;
	
 
}

int main()
{
   int  n1,n2;
	
	cout<<"Digite o primeiro numero\n";
	cin>>n1;
	
	cout<<"Digite o segundo numero\n";
	cin>>n2;
	
	if(divisivel(n1,n2))
	{
		
		cout<<n1<<" e divisivel por "<<n2<<"\n\n";
		
	}
	else{
		
		cout<<n1<<"  nao e divisivel por  "<<n2<<"\n\n";
		
	}
	
	if(n1 % n2 == 0)
	{
		
		
		cout<<n1<<"  e par \n\n";
		
	}
	
	else{
		
		cout<<n1<<" e impar \n\n";
		
	}
	getch();
	
	
	
}
	
	
	

