import ElementoHTML from "../ElementoHTML/ElementoHTML.js"
function cancelarAdicionamentoDoProduto() {
    const cancelar = new ElementoHTML("#cancelar")
    cancelar.elemento.addEventListener("click", () => {
        const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
        containerProduto.adicionarClasse("display-none")
    })
}
function removeProduto (ev){
   const btn = ev.currentTarget; 
   const  container = btn.parentNode;
   const section = container.parentNode;
   section.removeChild(container); 
}
function adicionarProduto(containerProduto) {
    const sessaoAtiva = new ElementoHTML(".section-container.active");
    let clique = false
    const adicionarProduto = new ElementoHTML("#adicionar-produto");
    adicionarProduto.elemento.addEventListener("click", () => {
        if (!clique) {
            const divContainer = document.createElement("div");
            const divInformacaoProduto = document.createElement("div");
            const nomeAlimento = document.createElement("p");
            const dataFabricacao = document.createElement("p");
            const dataValidade = document.createElement("p")
            const btnRemove = document.createElement("button");
            divContainer.classList.add("container-flex");
            nomeAlimento.textContent = `Produto: ${new ElementoHTML("#nome-alimento").elemento.value}`;
            dataFabricacao.textContent = `Data de fabricação: ${new ElementoHTML("#data-fabricacao").elemento.value}`;
            dataValidade.textContent = `Data de validade: ${new ElementoHTML("#data-validade").elemento.value}`;
            btnRemove.innerText = `Remover ${new ElementoHTML("#nome-alimento").elemento.value}`;
            btnRemove.addEventListener("click" , removeProduto);
            divInformacaoProduto.classList.add("informacoes-produto");
            divInformacaoProduto.append(dataFabricacao, dataValidade);
            divContainer.append(nomeAlimento, divInformacaoProduto , btnRemove)
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
        sessoes[0].classList.add("active")
        sessoes[1].classList.remove("active")
    })
    ambitente.elemento?.addEventListener("click", () => {
        sessoes[0].classList.remove("active")
        sessoes[1].classList.add("active")
    })

}

export {cancelarAdicionamentoDoProduto , adicionarProduto , trocarAbaProduto};