#include<iostream>
#include<conio.h>

using namespace std;

int TipoDoTriangulo(int l1,int l2, int l3)
{
	int retorno;
	

  (l1 == l2 && l1 == l3 && l2 == l3) ? 	retorno =   1 : retorno; ;
  
  (l1 == l2 && l1 != l3  || l1 == l3 && l1 != l2 || l2 == l3 && l2 != l1) ?  retorno =  2 : retorno;  
  
  (l1 != l2 && l1 != l3 && l2 != l3) ? retorno = 3 : retorno; 
  
  (l1 + l2 < l3 ) ?  retorno = 0 : retorno; 

  return retorno;
}

int main()

{
	 int  l1,l2,l3;

	cout<<"Digite o primeiro lado de um triangulo\n";
	cin>>l1;
	
	cout<<"Digite o segundo lado de um triangulo\n";
	cin>>l2;
	
	cout<<"Digite o terceiro lado de um triangulo\n";
	cin>>l3;
	switch(TipoDoTriangulo( l1, l2, l3))
	{
		case 0 : 
		cout<<"Nao e um triangulo\n";
		break;
		case 1 : 
		cout<<"Triangulo escaleno\n";
		break;
		case 2 :
	    cout<<"Triangulo isosceles";
	    break;

	    default :
	    	cout<<"triangulo equilatero";
	    	break;
	}
	getch();
	return 0;
}
