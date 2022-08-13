#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;


int main()
{
	int n = 0 , result;
	  cout<<"\n";
	cout<<"\tQUADRADO ----> \n\n";
   for(n; n <= 10 ;n++)
   {
  result = pow(n,2);
  cout<<"\tQUADRADO DE ---> "<<n<<" e ---> "<<result<<"\n";
   }
   n = 0;
   cout<<"\n";
   	cout<<"\tCUBO----> \n\n";
   for(n; n <= 10 ;n++)
   {
  result = pow(n,3);
  cout<<"\tCUBO DE ---> "<<n<<" e ---> "<<result<<"\n";
   }
   getch();
 
}
