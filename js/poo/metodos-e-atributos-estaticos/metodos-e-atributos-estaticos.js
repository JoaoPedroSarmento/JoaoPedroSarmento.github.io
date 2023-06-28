class Carro {
  static qtdDeCarrosCriados = 0;
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    Carro.qtdDeCarrosCriados += 1;
  }
  static criarCarroEsportivo() {
    return new Carro("Ferrari", "LaFerrari");
  }
  static criarSUV() {
    return new Carro("Jeep", "Grand Cherokee");
  }
}

const carro1 = Carro.criarCarroEsportivo();
const carro2 = Carro.criarSUV();
console.log(carro1, carro2);
console.log(Carro.qtdDeCarrosCriados);
