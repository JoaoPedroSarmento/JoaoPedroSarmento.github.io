// pode declarar ou não o tipo da função
int soma(int n1, int n2) {
  return n1 + n2;
}

// função com parâmetro nomeado
// é necessário usar o required para indicar que o valor passado no parâ,etro não será nulo
int subtracao({required int n1, required int n2}) {
  return n1 - n2;
}

// função com parâmetros opcionais
// o parâmetro opcional não pode ser o primeiro parâmetro
dynamic retornaMedia(int n1, [int? n2]) {
  return (n2 != null) ? (n1 + n2) / 2 : "Valores inadequados";
}

dynamic retornaDivisao(double n1, {double? n2}) {
  return (n2 != null) ? n1 / n2 : "Valores inadequados";
}

void main(List<String> args) {
  print(soma(3, 5));
  print(subtracao(n2: 20, n1: 80));
  print(retornaMedia(80, 90));
  print(retornaMedia(70));
  print(retornaDivisao(20, n2: 30));
  print(retornaDivisao(2));
}
