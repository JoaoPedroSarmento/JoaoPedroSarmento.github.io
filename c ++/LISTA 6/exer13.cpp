#include<iostream>
#include<conio.h>

using namespace std;

 int main () {
 	
 	int j = 0 ;
 	int v[4] [4] ;
 	
 	float valor ; 
 	float soma = 0 ; 
 	
	  for ( int i = 0 ; i <  4 ; i++) {
 	 	for ( int k = 0 ; k < 4 ; k++) {
 	 	     
 	 	     cout << "Insira o valor -->  linha -->  " << k << " coluna -- > " << i  ;
			  cin >> valor ; 
			  
			  v[k] [i] = valor ;  
		  }
	  }

 	for ( int i = 0 ; i < 4 ; i++ ) {
 		
 		if ( i % 2 == 0 ) {
 			cout <<" linha -- > " << i << " coluna -- > " << j << " valor -- > " <<  v [i] [j] << endl ;
 			soma = soma + v[i] [j];
		 	j++;
 			
 		
		 }
		 
	  else 
	   if( i % 2 != 2) {
	     	cout <<" linha -- > " << i << " coluna -- > " << j << " valor -- > " <<  v [i] [j] << endl ; 
	       soma = soma + v[i] [j] ;
		   j++; 
	       
	     
        }
			 
	 }
	 
	 cout << "Soma da diagonal da matriz -- >: " << soma ; 
	 
 }
