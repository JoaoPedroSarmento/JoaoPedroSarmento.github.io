void main(List<String> args) {
  int num = 33;
  // incrementando valores:
  print(num++);
  print(num += 1);
  // decrementando valores:
  print(num--);
  print(num -= 2);
  // retorna a parte inteira da divisão
  print(num ~/ 2);
  // retorna o resto da divisão
  print(num % 2);
  // adição
  print(10 + 20);
  // subtração
  print(20 - 10);
  // divisão
  print(num / 2);
  // multiplicação
  print(2 * 2);
  // operadores relacionais
  print(3 > 2);
  print(2 < 3);
  print(!(2 > 3));
  print(2 == 2);
  print(3 != 2);
  print(true == false);
  print(true.runtimeType == false.runtimeType);
}
