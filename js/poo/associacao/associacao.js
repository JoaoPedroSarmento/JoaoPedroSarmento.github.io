class Endereco {
  constructor(rua, numero, bairro, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
  todoEndereco() {
    return `Rua: ${this.rua},  número: ${this.numero}, bairro: ${this.bairro}, cidade: ${this.cidade}, estado: ${this.estado}`;
  }
}

class Pessoa {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }
}

const endereco = new Endereco(
  "R. Das Laranjeiras",
  "7",
  "Laranjeiras",
  "RJ",
  "RJ"
);
const dean = new Pessoa("Dean", endereco);
console.log(dean);
console.log(dean.endereco.todoEndereco());
/* Representação de como o objeto fica 
dean = {
  nome: "Dean",
  endereco: (endereco = {
    rua: "R. Das Laranjeiras",
    numero: "7",
    bairro: "Laranjeiras",
    cidade: "RJ",
    estado: "RJ",
    todoEndereco() {
      return `Rua: ${this.rua},  número: ${this.numero}, bairro: ${this.bairro}, cidade: ${this.cidade}, estado: ${this.estado}`;
    },
  }),
};
*/
