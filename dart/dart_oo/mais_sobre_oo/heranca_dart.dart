import 'dart:io';

class Pessoa {
  String nome;
  int idade;
  Pessoa(this.nome, this.idade);
}

class Aluno extends Pessoa {
  String turma;
  Aluno(String nome, int idade, this.turma) : super(nome, idade);
  void saudacao() {
    print("Olá me chamo ${nome}, sou da turma ${turma} e tenho ${idade} anos");
  }
}

void main() {
  print("Insira nome do aluno");
  String alunoNome = stdin.readLineSync()!;
  print("Insira a idade do aluno");
  int alunoIdade = int.parse(stdin.readLineSync()!);
  print("insira a turma:");
  String alunoTurma = stdin.readLineSync()!;
  Aluno aluno = Aluno(alunoNome, alunoIdade, alunoTurma);
  aluno.saudacao();
}
