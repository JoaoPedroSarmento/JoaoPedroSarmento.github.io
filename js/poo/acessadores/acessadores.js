class Pessoa {
  constructor() {
    this.nome = "";
  }
  get pegarNome() {
    return this.nome;
  }
  set definirNome(novoNome) {
    this.nome = novoNome;
  }
}

const pessoa1 = new Pessoa();
// usando acessador set para definir um nome
pessoa1.definirNome = "Leo";
// usando acessador get para pegar o nome
const nome = pessoa1.pegarNome;
console.log(nome);
