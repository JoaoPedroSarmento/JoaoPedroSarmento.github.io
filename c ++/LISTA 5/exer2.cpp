#include<iostream>

using namespace std ;

int potencia( int n , int p) 
{
	int ResultadoDaPotencia = 1;  
    if(p >= 1 )  
    {
     
    	
    	for(int i = 1; i <= p ; i++  )  
    	{
    		ResultadoDaPotencia = ResultadoDaPotencia * n; 
		} 
		return ResultadoDaPotencia; 
	}
	else
	if( p < 0 )
	{
		
    	
    	for(int i = -1; i >= p ; i--)  
    	{
    		ResultadoDaPotencia = ResultadoDaPotencia * n; 
		} 
		
		  if(p % 2  == 0) 		
	      return ResultadoDaPotencia; 
	      
	      return ResultadoDaPotencia * -1;
	}
	
	
 	return 1;

}

	
int main()
{
	int n , p ;
    
    cout << "Escreva um numero -- > ";
    cin >> n ;
    
    cout << "Escreva a potencia -- > ";
    cin >> p ;
    
    cout << "O resultado da potencia e -- > " <<potencia(n,p);
}
