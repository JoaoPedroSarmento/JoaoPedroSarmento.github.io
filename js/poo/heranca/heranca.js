class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  saudacao() {
    console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos`);
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }
  apresentar() {
    super.saudacao();
    console.log(`Sou professor de ${this.disciplina}`);
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, turma) {
    super(nome, idade);
    this.turma = turma;
  }
  apresentar() {
    super.saudacao();
    console.log(`Sou da turma ${this.turma}`);
  }
}
const professor = new Professor("Júlio", 31, "Matemática");
console.log(professor.apresentar());
const aluno = new Aluno("Ravi", "15", "s1");
console.log(aluno.apresentar());
