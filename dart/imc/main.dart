import 'dart:io';
import './funcoes.dart';

void main(List<String> args) {
  print("Insira seu nome:");
  String? nome = stdin.readLineSync()!;
  print("Insira seu peso:");
  double peso = double.parse(stdin.readLineSync()!);
  print("Insira sua altura:");
  double altura = double.parse(stdin.readLineSync()!);
  double imc = calculaIMC(altura, peso);
  String? tipoImc = classificaIMC(imc);
  print("Seu nome é: ${nome}.\nSeu imc é ${imc}.\n Tipo IMC: ${tipoImc}");
}
