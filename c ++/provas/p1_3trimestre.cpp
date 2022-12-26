
#include <iostream>
#include <conio.h>
#include <math.h>
using namespace std;

//5,0 pontos...
int qtdDoCaractereNoTexto(string texto, char caractere)
{
  int resposta = 0;
  int i;
  for (i = 0; texto[i] != '\0'; i++)
  {
    if (texto[i] == caractere)
      resposta++;
  }
  return resposta;
}

main()
{
  int linhas, colunas, tamanho, i, j, k;

  cout << "Forneca a quantidade de linhas  da matriz: ";
  cin  >> linhas;
  cout << "Forneca a quantidade de colunas da matriz: ";
  cin  >> colunas;

  if (linhas < 2 || colunas < 2) {
    cout << "\nValores informados não correspondem aos parâmetros de uma matriz";
    return 0 ;
  }

  else
  {
    tamanho = linhas * colunas;
    char matriz[linhas][colunas];
    char vetor[tamanho];

    cout << "\nForneca os elementos da matriz...\n";

    for(i = 0; i < linhas; i++)
      for(j = 0; j < colunas; j++)
      {
        cout << "Matriz[" << i << "][" << j << "] = ";
        cin >> matriz[i][j];
      }

    k = 0;
    for(j = 0; j < colunas; j++)
      for(i = 0; i < linhas; i++)
      {
         vetor[k] = matriz[i][j];
         k++;
      }

    cout << "\nElementos no vetor : ";
    for(i = 0; i < tamanho; i++)
      cout << vetor[i];
    cout << "\n";
  }
  return 1 ;
}

