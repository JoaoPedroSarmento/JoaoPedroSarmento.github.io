// polimorfismo de subtipo:
class Animal {
  fazerbarulho() {
    console.log("O animal faz barulho");
  }
}
class Gato extends Animal {
  fazerBarulho() {
    console.log("O gato faz mia");
  }
}

class Cachorro extends Animal {
  fazerbarulho() {
    console.log("O cachorro late");
  }
}

const cachorro = new Cachorro();
cachorro.fazerbarulho();
const gato = new Gato();
gato.fazerBarulho();
