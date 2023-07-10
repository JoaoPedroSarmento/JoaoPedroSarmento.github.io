//getters e setters
class Pessoa {
  late String nome;
  set definirNome(String valor) {
    nome = valor;
  }

  String get pegarNome {
    return nome;
  }
}

void main() {
  Pessoa pessoa = Pessoa();
  pessoa.definirNome = "Dean";
  print(pessoa.pegarNome);
}
