#include<iostream>
#include<conio.h>

using namespace std;

int triangulo(int l1,int l2, int l3)
{
	// l1 + l2 || l1 + l3 || l2 + l3
	int soma1 = l1 + l2;
	int soma2 = l1 + l3;
	int soma3 = l2 + l3;
	
	if ( l1 >  soma1 ||  l1  > soma2 || l1 > soma3 || l2 >  soma1 ||  l2  > soma2 || l2 > soma3 ||l3 >  soma1 ||  l3  > soma2 || l3 > soma3 )
	{
		return 0;
	}
	
	else
	{
		if(l1 == l2 && l1 == l3 && l2 == l3) 	return 1;
		
		
		
	}

     
     
	 
	    if(l1 == l2 && l1 != l3  || l1 == l3 && l1 != l2 || l2 == l3 && l2 != l1) return 2;

    	
    
    else
    return 3;
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
	switch(triangulo( l1, l2, l3))
	{
		case 0 : 
		cout<<"Nao e um triangulo\n";
		break;
		case 1 : 
		cout<<"Triangulo escale no\n";
		break;
		case 2 :
	    cout<<"Triangulo isosceles";
	    break;
	    default :
	    	cout<<"triangulo equilatero";
		
	}
	
	getch();
	return 0;
	
	
}
