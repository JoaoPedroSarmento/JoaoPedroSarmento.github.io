class ElementoHTML {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }
  adicionarClasse(classe) {
    this.elemento.classList.add(classe);
  }
  removerClasse(classe) {
    this.elemento.classList.remove(classe);
  }
  adicionarDisplay(display) {
    this.elemento.style.display = "display" + display;
  }
}

function cancelarAdicionamentoDoProduto() {
  const cancelar = new ElementoHTML("#cancelar")
  cancelar.elemento.addEventListener("click", () => {
    const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
    containerProduto.adicionarClasse("display-none")
  })
}

function adicionarProduto(containerProduto) {
  const sessaoAtiva = new ElementoHTML(".section-container.active");
  console.log(sessaoAtiva)
  let clique = false
  const adicionarProduto = new ElementoHTML("#adicionar-produto");
  adicionarProduto.elemento.addEventListener("click", () => {
    if (!clique) {
      const divContainer = document.createElement("div");
      const divInformacaoProduto = document.createElement("div");
      const nomeAlimento = document.createElement("p");
      const dataFabricacao = document.createElement("p");
      const dataValidade = document.createElement("p")

      divContainer.classList.add("container-flex");
      nomeAlimento.textContent = new ElementoHTML("#nome-alimento").elemento.value;
      dataFabricacao.textContent = `Data de fabricação: ${new ElementoHTML("#data-fabricacao").elemento.value}`;
      dataValidade.textContent = `Data de validade: ${new ElementoHTML("#data-validade").elemento.value}`;

      divInformacaoProduto.classList.add("informacoes-produto");
      divInformacaoProduto.append(dataFabricacao, dataValidade);
      divContainer.append(nomeAlimento, divInformacaoProduto)
      sessaoAtiva.elemento.appendChild(divContainer);
      containerProduto.adicionarClasse("display-none")
      clique = true;
    }
  })
  clique = false;
}
function trocarAbaProduto() {
  const geladeira = new ElementoHTML("#geladeira");
  const ambitente = new ElementoHTML("#ambiente");
  const sessoes = document.querySelectorAll(".section-container");
  geladeira.elemento?.addEventListener("click", () => {
    geladeira.adicionarClasse("active-color");
    ambitente.removerClasse("active-color");
    sessoes[0].classList.add("active")
    sessoes[1].classList.remove("active")
  })
  ambitente.elemento?.addEventListener("click", () => {
    ambitente.adicionarClasse("active-color");
    geladeira.removerClasse("active-color");
    sessoes[0].classList.remove("active")
    sessoes[1].classList.add("active")
  })

}
document.getElementById("adicionar-alimento").addEventListener("click", () => {
  const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
  if (containerProduto.elemento.classList.contains("display-none")) {
    containerProduto.removerClasse("display-none")
    cancelarAdicionamentoDoProduto()
    adicionarProduto(containerProduto)
  }
});

trocarAbaProduto()
