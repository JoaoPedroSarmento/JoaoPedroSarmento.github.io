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
     return x +1 -2;


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
        return x +1;

}


int main()

{
    float n, resultado;

    cout<<"Digite um n�mero --->";
    cin>>n;
   
    resultado = Floor(n);
    cout<<"Fun��o floor ---> "<<resultado<<endl;
     
  resultado = Ceil(n);
   cout<<"Fun��o ceil ---> "<<resultado;
  
   
}
