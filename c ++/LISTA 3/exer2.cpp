#include<iostream>
#include<math.h>
#include<conio.h>
 
 using namespace std;
 
 
 void soma(float nx,float ny,float dy,float dx, float &ret,float &ret2)
 
 {
 	float n,d;
 	
 	n = ( nx*dy ) +  (ny * dx);
 	d = dx * dy;
 	
 	ret  = n;
 	ret2 = d;
 	
 	
 }
 
 void subtracao (float nx,float ny,float dy,float dx,float &ret,float &ret2)
 
{
	
		float nu,de;
 	
 	nu=   (nx*dy )  -ny * dx;
 	de = dx * dy;
 	
 	ret  = nu;
ret2 = de;
 	
 	
	
	
}



 void multiplicacao (float nx,float ny,float dy,float dx,float &re,float &re2)
 
{
	
		float ne,du;
 	
 	ne =  nx *ny;
 	du = dx * dy;
 	
 	 re  = ne;
 	re2 = du;
 	
 	
	
	
}


 void divisao(float nx,float ny,float dy,float dx,float &re,float &re2)
 
{
	
		float ne,du;
 	
 	ne=  nx *dy;
 	du = dx * ny;
 	
 	 re  = ne;
 	re2 = du;
 	
 	
	
	
}

 
 
 int  main()
 
 {
 	float nx,ny,dy,dx,ret,ret2; 
    float ret3,ret4;
 	float reto1,reto2,reto3,reto4;
 	
 	cout<<"Digite o valor de nx:\n";
 	cin>>nx;
 	
 	cout<<"Digite o valor de dy:\n";
 	cin>>dy;
 	
 	cout<<"Digite o valor de ny :\n ";
 	cin>>ny;
 	
 	cout<<"Digite o valor de dx :\n ";
 	cin>>dx;
 	
 	soma(nx,ny,dy,dx,reto3,reto4);
 	cout<<"Numerador : "<<reto3<<"," <<"denominador :"<<reto4<<"\n";
 	
    subtracao(nx,ny,dy,dx,reto1,reto2);
    
    cout<<"Numerador : "<<reto1<<"," <<"denominador :"<<reto2<<"\n";
    
	multiplicacao(nx,ny,dy,dx,ret,ret2);
    
    cout<<"Numerador : "<<ret<<"," <<"denominador :"<<ret2<<"\n";
 
	 	divisao(nx,ny,dy,dx,ret3,ret4);
    
    cout<<"Numerador : "<<ret3<<"," <<"denominador :"<<ret4<<"\n";
 
	 
	 
	 getch();
 	
 	
 	
 	
 	
 }
