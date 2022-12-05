#include<iostream>
#include<math.h>
#include<conio.h>
 
 using namespace std;
 
 void soma(float &nx,float ny,float dy,float &dx ) { 
 	nx = ( nx * dy ) +  (ny * dx);
 	dx = dx * dy;
 }
 
 void subtracao (float &nx,float ny,float dy,float &dx) { 
	
    nx  =  (nx * dy ) - ( ny * dx ) ;
 	dx  = dx * dy;

}

 void multiplicacao (float &nx,float ny,float dy,float &dx ) { 
 	
 	nx  =  nx * ny;
 	dx = dx * dy;
 	
}


 void divisao(float &nx,float ny,float dy,float &dx )  {
 	nx =  nx * dy;
 	dx  = dx * ny;
}

 
 
 int  main() { 
     
    float nx,ny,dy,dx ;
    float nx2 , ny2 , dy2 , dx2 ; 
    
 	cout << "Digite o valor de nx:\n";
 	cin  >> nx;
 	nx2 = nx ; 
 	
 	cout << "Digite o valor de dy:\n";
 	cin  >> dy;
 	dy2 = dy ;
 	
 	cout << "Digite o valor de ny :\n ";
 	cin  >> ny;
 	ny2 = ny  ;

 	cout << "Digite o valor de dx :\n ";
 	cin  >> dx;
 	dx2 = dx ; 
 	
 	soma(nx,ny,dy,dx);
 	
    cout << "Numerador : " << nx << "," << "denominador :" << dx << "\n";
    
 	nx = nx2 , ny = ny2 , dy = dy2 , dx = dx2 ; 
    subtracao(nx,ny,dy,dx);
    
    cout << "Numerador : " << nx << "," << "denominador :" << dx << "\n";
    nx = nx2 , ny = ny2 , dy = dy2 , dx = dx2 ; 
	multiplicacao(nx,ny,dy,dx);
    
    cout << "Numerador : " << nx << "," << "denominador :" << dx << "\n";
    nx = nx2 , ny = ny2 , dy = dy2 , dx = dx2 ; 
	divisao(nx,ny,dy,dx);
 
    cout << "Numerador : " << nx << "," << "denominador :" << dx << "\n";
 
	 getch();
 }
