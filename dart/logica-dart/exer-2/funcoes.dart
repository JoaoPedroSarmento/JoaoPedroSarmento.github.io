import 'dart:math';

int fibonacci(int num) {
  int anterior = 0;
  int atual = 1;
  int proximo = anterior + atual;
  for (int cont = 1; cont < num; cont++) {
    print(proximo);
    proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
  }
  return proximo;
}
