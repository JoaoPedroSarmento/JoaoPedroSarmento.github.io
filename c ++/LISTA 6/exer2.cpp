#include<iostream>
using namespace std;

int main ()
{
	int tam = 6; 
	int array[tam] ;
	array[0] = tam; 
	int array2[tam];
	int array3[tam];
	for(int i = 1; i < tam; i++ )
	{
	    array[i] = i;
	  
	   for(int j = 0 ; j <= tam - 1  ; j++ )
	 {
	    array2[j] = array[j];	
	   for(int i = 0 ; i <= tam -1 ; i++)
	   {
	   	array3[i] = array[i] + array2[i];
	   }
	 }
	 
	}
	cout << array3[0] << endl; // 12 == true   
	cout << array3[1] << endl; // 2 == true 
	cout << array3[2] << endl; // 4 == true 
}
