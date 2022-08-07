class spaceship {
  constructor(name, maxcrew, maxvelocity) {
    this.nome = name;
    this.mxtripulante = maxcrew;
    this.mxvelocidade = maxvelocity;
    this.velocidade = 0;
  }
  speedup(aceleration) {
    this.velocidade += aceleration;
    if (this.velocidade > this.mxvelocidade) {
      alert("Velocidade máxima ultrapassada -----> Diminua a velocidade ");
    } else {
      if (this.velocidade <= this.mxvelocidade)
        console.log(velocidade + " <-- velocidade atual agradavel ");
    }
  }
}

class batlespaceship extends spaceship {
  // Palavra chave extends serve para herdar todos os comandos de uma classe determinada

  stop() {
    this.velocity = 0;
    console.log("Recolhendo nave");
  }
}

let information = new batlespaceship("Darwim", 30, 300); // Quando coloamos extends em uma classe ela irá herdar todos os elementos presentes na classe que você herdou

console.log(information);
let velocidade = prompt(
  "Digite a velocidade da nave --> (obs : Velocidade máxima é de 300 km/s) "
);

information.speedup(velocidade);

information.stop();
console.log(information);
