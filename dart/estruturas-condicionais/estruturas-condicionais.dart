import 'dart:io';

void main(List<String> args) {
  print("Insira a quantidade de aulas");
  // ! indica que o valor não pode ser nulo
  int qtdAulas = int.parse(stdin.readLineSync()!);
  print("Insira a quantidade de faltas");
  int qtdFaltas = int.parse(stdin.readLineSync()!);
  double frequencia = (qtdAulas - qtdFaltas) / qtdAulas * 100;
  print("Insira suas duas notas:");
  print("Nota 1:");
  double nota1 = double.parse(stdin.readLineSync()!);
  print("Nota 2:");
  double nota2 = double.parse(stdin.readLineSync()!);
  double media = (nota1 + nota2) / 2;
  print("${frequencia} media ${media}");
  if (frequencia < 75) {
    print("Reprovado!");
  } else if (media >= 60) {
    print("Aprovado!");
  } else if (media >= 40) {
    print("recuperação!");
  } else {
    print("Reprovado!");
  }
  // operador ternário
  print("Insira dois números:");
  int num1 = int.parse(stdin.readLineSync()!);
  int num2 = int.parse(stdin.readLineSync()!);
  bool condicao = num1 == num2;
  (condicao)
      ? print("Os números são iguais")
      : print("OS números não são iguais");
}
