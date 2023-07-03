// classe abstrata é uma classe que não é possível criar objetos a partir dela
abstract class Animal {
  void fazerSom();
  void mover();
}

/*
Polimorfismo é obtido através da herança e da sobreprosição  de métodos 
*/
class Cachorro extends Animal {
  String nome;
  Cachorro(this.nome);
  @override
  void fazerSom() {
    print("O chachorro está latindo");
  }

  @override
  void mover() {
    print("O Cachorro está correndo!");
  }
}

class Gato extends Animal {
  String nome;
  Gato(this.nome);
  @override
  void fazerSom() {
    print("O gato está miando!");
  }

  @override
  void mover() {
    print('O gato está correndo!');
  }
}

void main() {
  Gato gato01 = Gato("Luna");
  Cachorro cachorro01 = Cachorro("Bart");
  print(gato01.nome);
  print(cachorro01.nome);
  gato01.fazerSom();
  cachorro01.fazerSom();
  gato01.mover();
  cachorro01.mover();
}
