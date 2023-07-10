abstract class Animal {
  fazerBarulho();
}

class Gato implements Animal {
  @override // sobrepor
  fazerBarulho() {
    // TODO: implement fazerBarulho
    print('O  gato está miando');
  }
}

void main() {
  Gato gato = Gato();
  gato.fazerBarulho();
}
