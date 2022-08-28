class Libertadores {
  constructor(nome, Colocacao) {
    this.Nome = nome;
    this.Colocação = Colocacao;
  }

  set posicao(Colocacao) {
    if (this.Colocação < 5) console.log(this.Nome + "  está na libertadores");
    else if (this.Colocação == 5)
      console.log(this.Nome + " pode  estar na libertadores ");
    else if (this.Colocação > 5 && this.Colocação <= 20)
      console.log(
        this.Nome +
          " não   esta na libertadores, mas esta na série A do Brasileirão  "
      );
    else console.log(this.Nome + " não é um time da série  A ");
  }

  get Newposition() {
    if (ano == 2022 || ano == 2024 || ano == 2026) {
      if (this.Colocação < 5) {
        this.Colocação++;
        console.log("Colocação Atual --> " + this.Colocação);
      } else if (this.Colocação == 4)
        console.log(this.Nome + " esta na libertadores ");
      else if (this.Colocação > 5 && this.Colocação <= 20)
        console.log(
          this.Nome +
            " não   esta na libertadores, mas esta na série A do Brasileirão  "
        );
      else console.log(this.Nome + " está na série A do brasileirão");
    } else console.log("Ano digitado errado");
  }
}

let nome = prompt("Digite o nome do seu time --> ");

let posicao1 = prompt("Digite a posição do seu time na tabela -->");

let informacao = new Libertadores(nome, posicao1);

console.log(informacao);

informacao.posicao = posicao1;

let ano = prompt(
  "Digite um dos anos a  seguir para saber  posição do seu time \n 1 -->  2022\n 2 -->  2024 \n 3 --> 2026"
);
informacao.Newposition = ano;

console.log(informacao.Newposition);
