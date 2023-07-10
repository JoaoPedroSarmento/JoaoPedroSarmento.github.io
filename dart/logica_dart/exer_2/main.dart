import 'dart:io';
import './funcoes.dart';

void main() {
  print("Funcão fibonacci".toUpperCase());
  print("Insira o número");
  int num = int.parse(stdin.readLineSync()!);
  int resultado = fibonacci(num);
  print("Resultado ${resultado}");
}
