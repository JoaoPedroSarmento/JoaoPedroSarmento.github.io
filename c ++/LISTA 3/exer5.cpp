#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

void retorno (float c, float l, float p, float &agua, float &piso)
{
float volume, area;
volume = p * c * l;
area = c * l;
agua = volume;
piso = area;
}

int main()
{
float comprimento, largura, profundidade,  v, a;
cout << "Digite o comprimento da piscina: \n";
cin >> comprimento;
cout << "Digite a largura da piscina: \n";
cin >> largura;
cout << "Digite a profundidade da piscina: \n";
cin >> profundidade;
retorno (comprimento, largura, profundidade, v, a);
cout << "O volume de agua armazenado pela piscina vale: " << v << "\n";
cout << "A area de piso a ser substituido vale: " << a;
getch ();
}
