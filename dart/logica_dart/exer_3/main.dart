import 'dart:io';
import './funcoes.dart';

void main() {
  List<dynamic> arranjo = [];
  print("Insira o tamanho do array");
  int tam = int.parse(stdin.readLineSync()!);
  for (int i = 0; i < tam; i += 1) {
    print("Insira um valor para a posição ${i}");
    dynamic valor = stdin.readLineSync()!;
    arranjo.add(valor);
  }
  arranjo = inverteArray(arranjo, tam);
  print(arranjo);
}
