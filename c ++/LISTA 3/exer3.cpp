#include<iostream>
#include<math.h>
#include<conio.h>

 using namespace std;
 
 int  hora(int &min) { 
    float h =  min/60;
    min  = min % 60; 
    return h;
 }
 
 int main() {
  
 	  int minutos;
 	  cout << "Digite em minutos : ";
 	  cin >> minutos;
    cout<<"O horario e "<< hora ( minutos )  <<"hora(s)" << minutos  <<"minuto(s)";
 
 }
