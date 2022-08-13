#include<iostream>
#include<conio.h>
using namespace std;

int main()
{
	float m;
	cout<<"Digite a massa de um amterial radioativo\n";
	cin>>m;
	int tempo = 0;
    float gramas = 0.05;
     for( tempo; m >= gramas; tempo ++ )
	 {
	 	
	 	 cout<<" Tempo : "<<tempo<<" segundo[s]\n";
		 if(tempo == 50)
		 {
		 	tempo = 0;
		   m = 	m/2;
		 }    
		 
} 
     cout<<"Massa ao final do processo ---> "<<m;  
	
      getch();
}
