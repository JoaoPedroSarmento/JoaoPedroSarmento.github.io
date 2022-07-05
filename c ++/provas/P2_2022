#include <conio.h>
#include <math.h>
#include <iostream>
using namespace std;

int divisao(int &dividendo, int divisor)
{
  int quociente, resto;
  quociente = dividendo / divisor;
  resto = dividendo % divisor;
  dividendo = resto;
  return quociente;
}

main()
{
  int x, y, z;

  cout << "DIVISAO INTEIRA\n\n";
  cout << "ENTRE COM O DIVIDENDO ---> ";
  cin  >> x;
  cout << "ENTRE COM O DIVISOR -----> ";
  cin  >> y;

  z = divisao(x, y);

  cout << "RESULTADO: " << z << " + " << x << "/" << y;

  getch();
}
