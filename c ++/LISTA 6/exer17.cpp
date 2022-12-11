#include <iostream>

using namespace std;

// Função para verificar se as posições de origem e destino são válidas
// para um movimento de bispo
bool podeMoverBispo(int xOrigem, int yOrigem, int xDestino, int yDestino)
{
  // Verificamos se a distância entre as coordenadas x é igual à distância entre as coordenadas y
  // Isso é necessário, pois o bispo só pode se mover em diagonal
  return (xOrigem - xDestino) == (yOrigem - yDestino);
}

int main() { 
   // Declare e inicialize as variaveis que armazenarao as posicoes do tabuleiro
    int origem_x = 0, origem_y = 0, destino_x = 0, destino_y = 0;
    cout << "Digite a posicao de origem: ";
    cin >> origem_x >> origem_y;
    cout << "Digite a posicao de destino: ";
    cin >> destino_x >> destino_y;
   
   if ( podeMoverBispo )  cout << "E possivel mover o cavalo de (" << origem_x << "," << origem_y << ") para (" << destino_x << "," << destino_y << ")." << endl;
   else 
	        cout << "Nao e possivel mover o cavalo de (" << origem_x << "," << origem_y << ") para ("
             << destino_x << "," << destino_y << ")." << endl;
 
}
