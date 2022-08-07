#include<iostream>
#include<conio.h>
using namespace std;

int main()
{
	int hab,m,f,m2;
	int a,v,c; // Cor dos olhos
	int l,ca,p; // Cor do  cabelo
	int id; // Idade
	int cast;
	cout<<"Determine a quantidade de habitantes de certa cidade --->"; 
	cin>>hab;
	
	cout<<"Determine a quantidade de pessoas do sexo masculino --- > ";
	cin>>m;
	int hab2 = hab - m;
	
	cout<<"Habitantes do sexo masculino ---->"<<m<<"\n";
	cout<<"habitantes do sexo feminino ---> "<<hab2<<"\n";
	


	cout<<"Determine quantas pessoas tem olhos azuis --->";
	cin>>a;

	int olhos = hab - a; // Olhos restantes 

	while(a > hab)
	break;
	
    cout<<"Olhos restantes  : "<<olhos<<"\n";
    
	if(a != hab)
    {

	cout<<"Determine quantas pessoas tem olhos verdes --->";
	cin>>v;

    
	cout<<"Pessoas com olhos azuis ----> "<<a<<"\n";
    
	cout<<"Pessoas com olhos verdes ----> "<<v<<"\n";
	
	int cast = olhos - v; // Olhos castanhos

	cout<<"Pessoas com olhos castanhos ---->  "<<cast<<"\n";
	
	 
    }  
    else
    if(a == hab)
    {
    	cout<<"Pessoas com olhos azuis ----> "<<a<<"\n";
	}
	    else
    {
    	while(a >= hab)
    	break;
    	while(v >= olhos)
    	break;
	}
	
	cout<<"Determine quantas pessoas tem cabelo loiro --->";
	cin>>l;
	int cab = hab - l; // Cabelos restantes 

	while(l > hab)
	break;
	
		if( l  != hab)
    {

	cout<<"Determine quantas pessoas tem cabelo castanho --->";
	cin>>ca;

    
	cout<<"Pessoas com cabelo loiro  ----> "<<l<<"\n";
    
	cout<<"Pessoas com cabelo castanho ----> "<<ca<<"\n";
	
	int  p = cab - ca; // Cabelos  pretos

	cout<<"Pessoas com cabelo preto ---->  "<<p<<"\n";
	
	 
    }  
    else
    if(l  == hab)
    {
    	cout<<"Pessoas com cabelo loiro ----> "<<l<<"\n";
	}
	
	cout<<"Determine a maior idade dos habitantes ---> ";
	cin>>id;
	
	cout<<"Determine quantas  mulheres tem idade entre 18 e 65 --- > \n";
	cin>>m2;
	while(m2 > f )
	{
		break;
	}
      
	cout<<" Mulheres entre 18 e 65 ---> "<<m2<<" mulheres\n\n\n";
	int resultado = m - m2;
	cout<<" Mulheres com menos de 18 --> "<<resultado;
	

	getch();
	
	
}
