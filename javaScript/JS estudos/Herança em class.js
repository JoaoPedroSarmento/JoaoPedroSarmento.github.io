class Nome {
  constructor(nome) {
    this.Nome = nome;
  }
  olhos(cor) {
    this.CorDosOlhos = cor;
  }
}

class etnia {
  contructor(corPele) {
    this.Etnia = corPele;
  }
}

let Seunome = prompt("Digite seu nome ");

let identidade = new Nome(Seunome);
console.log(identidade);

let cor = prompt("Digite a cor dos seus olhos\n");

identidade.olhos(cor);
console.log(identidade);

let pele = prompt("Digite sua etnia ---> ");

let id = new etnia(pele);
id.etnia;
console.log(id);
