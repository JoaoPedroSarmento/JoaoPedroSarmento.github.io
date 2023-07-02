import 'dart:io';

void main(List<String> args) {
  bool condicao = 13 > 10;
  print(condicao);
  // verifica se 13 é maior que 10 e se 8 é menor que 10
  condicao = condicao && 8 < 10;
  print(condicao);
  condicao = 2 > 3 || 3 > 2;
  print(condicao);
}
