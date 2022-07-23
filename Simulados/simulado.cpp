#include<iostream>
using namespace std;

int comparaDatas(int dia, int mes, int ano, int dia2,int mes2,int ano2)
{

	if(ano2 > ano || ano2 == ano && mes2 > mes || ano2 == ano && mes2 == mes && dia2 > dia)
	{
		return -1;
	}

	
	if(ano2 < ano || ano == ano2 && mes >  mes2 || ano == ano2 && mes == mes2 && dia >  dia2)
	{
		return  1;
	}
	
	else return 0;

	
}

int datas(int dia, int mes, int ano, int dia2,int mes2,int ano2,int &idade)
{   int  aux;

	if( (ano2 > ano && mes2 > mes ) || ( ano2 > ano && mes2 == mes && dia2 > dia )  || ( ano2 > ano && mes2 == mes && dia2 == dia) )
	{
	aux  = ano2 - ano   ;
	idade = aux;
	}

	
	else 
	if( (ano2 > ano && mes2 < mes  ) || (ano2 > ano && mes2 == mes && dia2 < dia)|| (ano2 > ano && mes2 == mes && dia2 == dia) )
	{
			aux  = ano2 - ano - 1  ;
	idade = aux;
	}
	

  
			
	if(ano == ano2 && mes > mes2)
{
     aux =  mes2 - mes;
     idade = aux;
}

else 
if(ano == ano2 && mes == mes2 && dia > dia2)
{
	aux = dia2 - dia;
   idade = aux;
}
else
if( (ano > ano2 && mes < mes2 )  || ( ano > ano2 && mes >  mes2 ) || ( ano >  ano2 && mes == mes2 && dia > dia2 ) || ( ano >  ano2 && mes == mes2 && dia < dia2 ) || (ano > ano2 && mes == mes2 && dia == dia2))

 aux =  ano2 - ano;
     idade = aux;
     

     
 if(ano == ano2 && mes == mes2 && dia == dia2)
 aux = ano - ano2;
     idade = aux;
     	

     	

    
}


int main()
{
	int dia,mes,ano;
	int dia2,mes2,ano2,ret,idade;
	
	
	cout<<"Digite o dia do nascimento de um familiar\n";
	cin>>dia;
	
	cout<<"Digite o mes do nascimento de um familiar\n";
	cin>>mes;
	
	cout<<"Digite o ano do nascimento de um familiar\n";
	cin>>ano;
  	
  		cout<<"Digite o dia atual\n";
	cin>>dia2;
	
	cout<<"Digite o mes atual\n";
	cin>>mes2;
	
	cout<<"Digite o ano atual\n";
	cin>>ano2;

	datas(dia,  mes,  ano,  dia2, mes2, ano2,idade);
  
  	
  	switch(comparaDatas(dia,mes,ano,dia2,mes2,ano2))
  	{
  		case -1 : // Retorna -1 quando a segunda data for maior que a primeira 
  			cout<<"Primeira data  "<<" segunda data "<<"  comparacao "<<" idade \n\n";
  			cout<<dia<<"/"<<mes<<"/"<<ano<<"        "<<dia2<<"/"<<mes2<<"/"<<ano2<<"        "<<"-1"<<"        "<<idade;
	  break;
  case 1 : // Retorna 1 quando a primeira data for maior que a segunda
  			cout<<"Primeira data  "<<" segunda data "<<"  comparacao "<<" idade \n\n";
  			cout<<dia<<"/"<<mes<<"/"<<ano<<"        "<<dia2<<"/"<<mes2<<"/"<<ano2<<"        "<<"1"<<"        "<<idade;
	  break;
	case 0 :  // Retorna 0 quando duas datas forem iguais 
	  	
  	cout<<"Primeira data  "<<" segunda data "<<"  comparacao "<<" idade \n\n";
  			cout<<dia<<"/"<<mes<<"/"<<ano<<"        "<<dia2<<"/"<<mes2<<"/"<<ano2<<"        "<<"0"<<"        "<<idade;
	  break;
}
	
}
