#include <iostream>
using namespace std;

int main() { 
    
    // Declare e inicialize as variaveis que armazenarao as posicoes do tabuleiro
    int origem_x = 0, origem_y = 0, destino_x = 0, destino_y = 0;

    // Leia as posicoes do tabuleiro
    cout << "Digite a posicao de origem: ";
    cin >> origem_x >> origem_y;
    cout << "Digite a posicao de destino: ";
    cin >> destino_x >> destino_y;

    // Verifique se as posicoes informadas sao validas para um movimento do cavalo
    if (((origem_x - destino_x) == 1 && (origem_y - destino_y) == 2) ||
        ((origem_x - destino_x) == 2 && (origem_y - destino_y) == 1))
    {
        cout << "E possivel mover o cavalo de (" << origem_x << "," << origem_y << ") para ("
             << destino_x << "," << destino_y << ")." << endl;
    }
    else { 
        cout << "Nao e possivel mover o cavalo de (" << origem_x << "," << origem_y << ") para ("
             << destino_x << "," << destino_y << ")." << endl;
   }
   
    return 0;
}
