class Conta {
  #senha;
  constructor(email, senha) {
    this.email = email;
    this.#senha = senha;
  }
  trocarSenha(email, senha, novaSenha) {
    if (this.#verficaConta(email, senha)) {
      this.#senha = novaSenha;
      console.log(this.#senha);
      return true;
    }
    return false;
  }
  #verficaConta(email, senha) {
    return email === this.email && senha === this.#senha;
  }
}

const conta = new Conta("joao@gmail.com", "123456");
console.log(conta);
console.log(conta.trocarSenha("joao@gmail.com", "123456", "654321"));
