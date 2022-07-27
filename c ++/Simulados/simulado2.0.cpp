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

int datas(int dia, int mes, int ano, int dia2,int mes2,int ano2)
{   int  aux;

	if( (ano2 > ano && mes2 > mes ) || ( ano2 > ano && mes2 == mes && dia2 > dia )  || ( ano2 > ano && mes2 == mes && dia2 == dia) )
	{
     return ano2 - ano;  // A pessoa já fez anivesário  ano atual - ano do nascimento 
	}

	
	else 
	if( (ano2 > ano && mes2 < mes  ) || (ano2 > ano && mes2 == mes && dia2 < dia)|| (ano2 > ano && mes2 == mes && dia2 == dia) )
	{
    return ( ano2 - ano )- 1; // A pessoa não fez aniversário é o ano atual - ano do aniversário - 1
	}
    else
     if(comparaDatas(dia, mes,  ano, dia2, mes2,ano2) == 1)

     {
            return -1;
     }
     else  
     return 0;    
}


int main()
{
	int dia,mes,ano;
	int dia2,mes2,ano2,ret,idade;
	
	 cout<<"Primeira data \n";
	cout<<"Digite o dia do nascimento de um familiar\n";
	cin>>dia;
	
	cout<<"Digite o mes do nascimento de um familiar\n";
	cin>>mes;
	
	cout<<"Digite o ano do nascimento de um familiar\n";
	cin>>ano;
  	 cout<<"Segunda  data \n";
  	cout<<"Digite o dia atual\n";
	cin>>dia2;
	
	cout<<"Digite o mes atual\n";
	cin>>mes2;
	
	cout<<"Digite o ano atual\n";
	cin>>ano2;

  idade = datas(dia,  mes,  ano,  dia2, mes2, ano2);
  
  	
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
     default  :  // Retorna 0 quando duas datas forem iguais 
	  	
   	cout<<"Primeira data  "<<" segunda data "<<"  comparacao "<<" idade \n\n";
  			cout<<dia<<"/"<<mes<<"/"<<ano<<"        "<<dia2<<"/"<<mes2<<"/"<<ano2<<"        "<<"0"<<"        "<<idade;
	  break;
}
	
}
