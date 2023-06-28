class Conta {
  #senha;
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.#senha = senha;
  }
  validarEmail() {
    if (!this.email.match(/^[\w]{2,}\@[\w]{2,}\.[\w]{2,}$/)) {
      throw new Error("Email invalido!");
    }
  }
  validarSenha() {
    if (
      !this.#senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
    ) {
      throw new Error("Senha inválida!");
    }
  }
}
class ElementoHTML {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }
  trocarTexto(texto) {
    this.elemento.inneText = texto;
  }
  adicionaClasse(classe) {
    this.elemento.classList.add(classe);
  }
  removeClasse(classe) {
    this.elemento.classList.remove(classe);
  }
}
const nome = new ElementoHTML("#name");
const email = new ElementoHTML("#email");
const senha = new ElementoHTML("#password");
const usuario = new Conta(nome, email, senha);
let input = new ElementoHTML("#email-error");
document.getElementById("submit").addEventListener("click", function (ev) {
  ev.preventDefault();
  try {
    usuario.validarEmail();
    input = new ElementoHTML("#password-error");
    usuario.validarSenha();
  } catch (erro) {
    console.log(erro);
    input.trocarTexto(erro);
    input.adicionaClasse("error");
  }
});
