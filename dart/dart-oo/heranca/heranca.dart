class Pessoa {
  String nome;
  int idade;
  Pessoa(this.idade, this.nome);
  void saudacao() {
    print("Me chamo ${this.nome} e minha idade é ${this.idade}");
  }
}

class Estudante extends Pessoa {
  String turma;
  Estudante(int idade, String nome, this.turma) : super(idade, nome);
}

void main() {
  print("Trabalhando com herança");
  Estudante estudante01 = Estudante(17, "João", "S1");
  estudante01.saudacao();
}
