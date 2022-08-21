#include<iostream>
#include<conio.h>
using namespace std;

int ComparaDatas(int dia,int mes, int ano , int dia2 , int mes2 , int ano2 )
{
	if( (ano2 > ano  )  || ( ano2 == ano && mes2 > mes )  ||  (  ano2 == ano && mes2 == mes && dia2 > dia )  ) return -1;
	else
	if( (ano2 < ano  )  || ( ano2 == ano && mes2 < mes )  ||  (  ano2 == ano && mes2 == mes && dia2 < dia )  ) return 1;
	return 0 ;
	
}

int IdadeDaPessoa(int dia,int mes, int ano , int dia2 , int mes2 , int ano2 )
{
	// A pessoa fez aniversário 
	if ( ( ano2 > ano && mes2 > mes ) || ( ano2 > ano && mes2 == mes && dia2 > dia ) ) return  ano2 - ano;
	else
	// A pessoa  não fez aniversário 
	if (  ( ano2 > ano && mes2 < mes )   || ( ano2 > ano && mes2 == mes && dia2 < dia ) ) return  ( ano2 - ano  )  -1; 
    else
     if(ComparaDatas(dia, mes, ano ,dia2, mes2 , ano2) == 1) return -1;
	 else
	 return 0;
   
 }


int main()
{
   int dia,mes,ano,dia2,mes2,ano2;
  
	cout << "Digite o ano do nascimento de algum familiar -- > \n";
	cout << "Dia -- > ";
	cin >> dia;
	cout << "Mes -- > ";
	cin >> mes;
	cout << "Ano -- > ";
	cin >> ano;
	cout << "Digite o ano atual -- > \n";
	cout << "Dia -- > ";
	cin >> dia2;
	cout << "Mes -- > ";
	cin >> mes2;
	cout << "Ano -- > ";
	cin >> ano2;
	 int idade = IdadeDaPessoa(dia,mes,ano,dia2,mes2,ano2);
		switch(ComparaDatas(dia,mes,ano,dia2,mes2,ano2))
		{
			case -1 : 
			
			cout << "\t PRIMEIRA DATA " << "  SEGUNDA DATA "<< "\t COMPARACAO " << "\t IDADE" << endl;
            cout <<  "\t "<<dia<<"/"<<mes<<"/"<<ano;   
            cout <<  "\t "<<dia2<<"/"<<mes2<<"/"<<ano2;
            cout <<"\t "<<"  -1"; cout<<"\t\t"<<idade;
			
			break;
			case 1 : 
		
			cout << "\t PRIMEIRA DATA " << "  SEGUNDA DATA "<< "\t COMPARACAO " << "\t IDADE" << endl;
            cout <<  "\t "<<dia<<"/"<<mes<<"/"<<ano;   
            cout <<  "\t "<<dia2<<"/"<<mes2<<"/"<<ano2;
            cout <<"\t "<<"  1"; cout<<"\t\t"<<idade;
            
            break;
            
            default :
            		
			cout << "\t PRIMEIRA DATA " << "  SEGUNDA DATA "<< "\t COMPARACAO " << "\t IDADE" << endl;
            cout <<  "\t "<<dia<<"/"<<mes<<"/"<<ano;   
            cout <<  "\t "<<dia2<<"/"<<mes2<<"/"<<ano2;
            cout <<"\t "<<"0"; cout<<"\t\t"<<idade;
            
            break;
		}
	
}
