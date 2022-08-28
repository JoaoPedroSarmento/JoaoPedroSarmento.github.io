class timesBR {
  constructor(
    nome,
    nome2 // Método construtor, serve para criar um método nosso, pois em si a class já posssui um método vázio
  ) {
    this.PrimeiroTime = nome;
    this.SegundoTime = nome2;
  }
}

let nomes = new timesBR("Flamengo", " Fluminense"); // Quando chamamos o new + o nome da classe na real estamos chamando o método construtor
console.log(nomes);

class timesEU {
  constructor(nome = "Barcelona", nome2 = "Real Madrid") {
    this.PrimeiroTime = nome;
    this.SegundoTime = nome2;
  }
}

let timesEuropa = new timesEU(); // Caso colocasse valores para os outros parâmetros que já possuem valores, o valor ia ser substituido
console.log(timesEuropa);
let timesEuropasubst = new timesEU("PSG");
console.log(timesEuropasubst);
