#include <conio.h>
#include <math.h>
#include <iostream>
using namespace std;

float tangente(float angulo)
{
  float s, c, t;
  s = sin(angulo);
  c = cos(angulo);
  t = s/c;
  return t;
}

main()
{
  float a, tg;

  cout << "ENTRE COM A MEDIDA DO ANGULO ---> ";
  cin  >> a;

  tg = tangente(a);

  cout << "A TANGENTE DE " << a << " VALE " << tg << ".";

  getch();
}
