#include<iostream>
#include<conio.h>
using namespace std;

bool fabs1(float n) { 
  return  (n < 0 ) ; 
}


int main() { 
	
	float n;
	cout<<"Digite um valor\n";
    	cin>>n;
    	switch(fabs1(n)) { 
			
	case true : cout << n * (-1);
	break;
	default :
	cout << n;
	}
    	getch();
	
}
