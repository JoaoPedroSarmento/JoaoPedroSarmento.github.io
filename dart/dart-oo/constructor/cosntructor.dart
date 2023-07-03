void main(List<String> args) {
  Fruta fruta01 = Fruta("Laranja", 100.2, 'Amarela');
  print(fruta01);
  print(fruta01.cor);
  fruta01.mostraCor();
}

// para criar o método construtor (para criar objetos) é necessário chamar a classe dentor dela mesma
class Fruta {
  String nome;
  double peso;
  String cor;
  Fruta(this.nome, this.peso, this.cor);
  void mostraCor() {
    print(this.cor);
  }
}
