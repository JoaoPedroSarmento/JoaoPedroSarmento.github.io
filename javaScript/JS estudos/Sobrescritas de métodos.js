class spaceships {
  constructor(nome, trip, maxvelocity) {
    this.nome = nome;
    this.trip = trip;
    this.velocidade = maxvelocity;
    this.velocidadeatual = 0;
  }

  speeupd(aceleration) {
    this.velocidadeatual += aceleration;
    if (this.velocidadeatual > this.maxvelocity)
      console.log("Velocidade máxima alcançada");
  }
}
class transport extends spaceships {
  // herdando de spaceships
  speedup() {
    console.log("naves de tranposte só aumentam a velocidade em 1km/s");
    this.velocidadeatual++;
  }
}

let tranporstSpaceship = new transport("Transportadora", 4, 100);
tranporstSpaceship.speedup();
console.log(tranporstSpaceship);
