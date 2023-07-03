import 'dart:io';
import './funcoes.dart';

void main() {
  print("CALCULANDO FATORIAL DE UM NÚMERO");
  print("Insira o número:");
  int num = int.parse(stdin.readLineSync()!);
  int resultado = calculaFatorial(num);
  print("Resultado: ${resultado}");
}
