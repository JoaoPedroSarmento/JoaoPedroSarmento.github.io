#include<iostream>
#include<conio.h>
using namespace std;

int Floor (float n)
{
    int x = n;
    
  
    if ( x == n && x < 0)
    return x;
   
      else
     if (x < 0 )
     while(x < 0)
     {
       x = n -1;
       if(x < n )
       {
	   return x;
       break;  
	   }
	 }


else
return x;

}

int Ceil( float n)
{

    int x = n;
    if ( x == n )
    {

        return x;
    }
      if ( x == n && x < 0)
    return x;
   
     
	  else
	 if (x < 0 )
     return x ;
    
	else
         while(x > 0)
     {
       x = n + 1;
       if(x > n )
       {
	   return x;
       break;  
	   }

}
}


int main()

{
    float n, resultado;

    cout<<"Digite um número --->";
    cin>>n;
   
    resultado = Floor(n);
    cout<<"Funcao floor ---> "<<resultado<<endl;
     
  resultado = Ceil(n);
   cout<<"Funcao ceil ---> "<<resultado;
  
   
}
