#include<iostream>

using namespace std;

int posicao(char l)
{
	if(l == 'a' || l == 'A') return 1;
	
	else 
	if( l == 'b' || l =='B') return 2;
	else 
	if( l == 'c' || l =='C') return 3;
	
	else
	if(l ==  'd' || l == 'D') return 4;
	
	else
	if(l == 'e'|| l == 'E') return 5;
	
	else 
	if(l == 'f' || l =='F') return 6;
	
		else 
	if(l == 'g' || l =='G') return 7;
	
		else 
	if(l == 'h' || l =='H') return 8;
	
		else 
	if(l == 'i' || l =='I') return 9;
	
		else 
	if(l == 'j' || l =='J') return 10;
	
		else 
	if(l == 'k' || l =='K') return 11;
	
		else 
	if(l == 'l' || l =='L') return 12;
	
		else 
	if(l == 'm' || l =='M') return 13;
	
		else 
	if(l == 'n' || l =='N') return 14;
	
		else 
	if(l == 'o' || l =='O') return 15;
	
		else 
	if(l == 'p' || l =='P') return 16;
	
		else 
	if(l == 'q' || l =='Q') return 17;
	
		else 
	if(l == 'r' || l =='R') return 18;
	
		else 
	if(l == 's' || l =='S') return 19;
	
		else 
	if(l == 't' || l =='T') return 20;
	
		else 
	if(l == 'u' || l =='U') return 21;
	
		else 
	if(l == 'v' || l =='V') return 22;
	
		else 
	if(l == 'w' || l =='W') return 23;
	
		else 
	if(l == 'x' || l =='X') return 24;
	
		else 
	if(l == 'y' || l =='Y') return 25;
	
		else 
	if(l == 'z' || l =='Z') return 26;
	
	else
	return 0;
	
	
	
	
	
}

int main()
{
    char L;
    int pos;
	cout<<"Digite uma letra";
	cin>>L;
	
   pos = posicao(L);
	switch(pos)
	{
		case 1:
		case 2:
		case 4:
		case 5:
		case 6:
		case 7:			
		case 8:																					
		case 9:
	    case 10:
	   	case 11:
	   	case 12:
	   	case 13:
	   	case 14:
	   	case 15:
	   	case 16:
	   	case 17:
	   	case 18:
	 	case 19:
	   	case 20:
	   	case 21:
	   	case 22:
	   	case 23:
	   	case 24:
	   	case 25:
	   	case 26:
	   	cout<<"A letra "<<L<<"  esta na posicao "<<pos<<" do alfabeto";
	   	break;
	   	default :
	   		cout<<"isso nao e uma letra\n";
        
	}
	
	
}

