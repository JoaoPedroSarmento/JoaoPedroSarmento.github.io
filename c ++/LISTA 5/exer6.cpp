#include<iostream>
#include<conio.h>
using namespace std;

int main()
{
	float m;
	cout<<"Digite a massa de um material radioativo\n";
	cin>>m;
	int t = 0;
    float gramas = 0.05;
     while( m >= gramas) 
	 {
	 	m = m/2;
	 	t = t + 50 ;
     } 
     cout<<"Tempo ---> "<<t;  
	
      getch();
}
