#include<iostream>
#include<conio.h>

using namespace std;


int Floor_ ( float n)
{
	int x = n;
	return x;
	
}

int Ceil_ ( float n )
{
  int  res = n;
  if(res == n)
  {
   return res;
  } 	
  else
  return res + 1;
}


int main()

{
	float n,resultado;
	cout<<"Digite um numero -->\n";
	cin>>n;
    resultado = Floor_(n);
	cout<<"Numero com a funcao floor ---> "<<resultado<<endl;
    resultado = Ceil_(n);
    cout<<"Numero com a funcao ceil ---> "<<resultado<<endl;
}
