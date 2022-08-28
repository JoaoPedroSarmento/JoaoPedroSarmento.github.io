class spaceships {
  constructor(nome, trip, maxvelocity) {
    this.nome = nome;
    this.trip = trip;
    this.velocidadeMax = maxvelocity;
    this.velocidadeatual = 0;
  }

  speedup(aceleration) {
    this.velocidadeatual += aceleration;

    if (this.velocidadeatual > this.velocidadeMax)
      console.log("Velocidade máxima alcançada");
    else console.log("Velocidade agradável");
  }
}

class transport extends spaceships {
  // herdando de spaceships

  constructor(nome, trip, maxvelocity, maxcarga) {
    super(nome, trip, maxvelocity, maxcarga); // O super ele faz com que puxe o constructor da classe que está sendo herdada
    this.maximoDeCarga = maxcarga;
  }
  speedup(aceleration) {
    aceleration *= 2;
    console.log("Incrementando velocidade em  " + aceleration + " km/s");
    super.speedup(aceleration);
  }
}
let nome = prompt("Digite o nome da nave --> ");

let tripulantes = prompt("Digite a quantidade de tripulantes -->");

alert("A VELOCIDADE MÁXIMA DA NAVE é 1000 km/s");

let velocidade = prompt("Digite a velocidade da nave --> ");

let tranporstSpaceship = new transport(nome, tripulantes, 1000);

console.log(tranporstSpaceship);

tranporstSpaceship.speedup(velocidade);
