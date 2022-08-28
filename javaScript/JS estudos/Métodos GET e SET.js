class transport {
  constructor(name) {
    this.Nome = name;
    this.velocidade = 0;
  }

  set velocity(newvelocity) {
    if (newvelocity > 120) {
      this.velocidade = 120;
    } else {
      this.velocidade = newvelocity;
    }
  }
}

let spaceship = new transport("Transportador");

spaceship.velocity = 130; // Como velocity está com o set, podemos então entender  que velocity é uma variável e não um metodo

// Como atribuímos um valor maior do que o pedido irá atribuir o valor máximo, ou seja , 120
console.log(spaceship);

spaceship.velocity = 50;
console.log(spaceship);

class processstation {
  constructor(nome, processload) {
    this.name = nome;
    this.processo = processload;
  }
  get weekprocess() {
    return (this.processo /= 4);
  }
}

let processosNave = new processstation("Speed", 500);
console.log(processosNave.weekprocess);

processosNave.processo = 20;
console.log(processosNave.weekprocess);
