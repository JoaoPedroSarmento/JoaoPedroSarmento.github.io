class naves {
  constructor(name) {
    this.nomeDaNave = name;
    this.velocidade = 0;
  }

  aumetarVelocidade(
    aceleracao // Isso é um método normal, eles seguem as mesmas regras que criar uma função
  ) {
    this.velocidade += aceleracao;
  }
}

let artemis = new naves("Artemis");
console.log(artemis);

artemis.aumetarVelocidade(10);
console.log(artemis);
artemis.aumetarVelocidade(10);
console.log(artemis);
