#include<iostream>
#include<math.h>
#include<conio.h>

 using namespace std;
 
 
 void  hora(int min)
 
 {
 	float h,porc;
 	
 	h = min/60;
 	porc = min % 60;
 	
 	cout<<"O horario e "<<h<<"hora(s)"<<porc<<"minuto(s)";
 	
 	
 	
 	
 }
 
 int main()
 
 {
 	int minutos;
 	
 	cout<<"Digite em minutos : ";
 	cin>>minutos;
 
 	hora(minutos);
 
 	
 	
 	
 	
 }
