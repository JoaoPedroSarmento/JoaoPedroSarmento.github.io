void main() {
  int i = 1;
  while (i <= 10) {
    print(i);
    i += 1;
  }
  i = 1;
  do {
    print(i);
  } while (i > 1);
  int valorAtual = 1;
  int valorAnterior = 0;
  int proximoValor = valorAtual + valorAnterior;
  print("FIBONACCI");
  for (int j = 1; j <= 9; j++) {
    print(valorAtual);
    proximoValor = valorAtual + valorAnterior;
    valorAnterior = valorAtual;
    valorAtual = proximoValor;
  }
}
