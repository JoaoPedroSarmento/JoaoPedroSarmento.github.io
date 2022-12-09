#include<conio.h>
#include<iostream>

using namespace std;

bool divisivel (int n,int n2) { 
  return (n % n2 == 0  ) ; 
}

int main( ) { 
	
   int  n1,n2;
	
	cout<<"Digite o primeiro numero\n";
	cin>>n1;
	
	cout<<"Digite o segundo numero\n";
	cin>>n2;
	switch(divisivel(n1,n2)) { 
		case true : cout <<n1 << " e divisivel por -- > " << n2 << endl ;
		break;
		default : 
		  cout <<n1 << " ao  e divisivel por -- > " << n2 << endl ; 
	}
	  (n1 % 2 == 0  || n2 % 2 == 0 ) ? cout << "um numero e par " : cout << " um numero e impar";
	getch();

}
