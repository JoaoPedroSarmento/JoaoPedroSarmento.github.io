import ElementoHTML from "../ElementoHTML/ElementoHTML.js"
function cancelarAdicionamentoDoProduto(sectionAtiva) {
    const cancelar = new ElementoHTML("#cancelar")
    cancelar.elemento.addEventListener("click", () => {
        const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
        containerProduto.adicionarClasse("display-none")
        sectionAtiva.adicionarClasse("active")
    })
}
function removeProduto(ev) {
    const btn = ev.currentTarget;
    const container = btn.parentNode;
    const section = container.parentNode;
    section.removeChild(container);
}

function moverAlimentoParaInicio() {
    const secaoAtiva = document.querySelector(".active");
    const containers = Array.from(document.querySelectorAll(".active .container-flex"));
    const alimentoInput = document.getElementById("nome-alimento-pesquisar");
    const valorProcurado = alimentoInput.value.trim().toLowerCase();
    console.log(valorProcurado);
    const containerProcurado = containers.find((elem) => {
        console.log(elem.dataset.produto.trim().toLowerCase());
        return valorProcurado === elem.dataset.produto.trim().toLowerCase();
    });
    console.log(containerProcurado.dataset.produto);
    if (containerProcurado) {
        // Remove o container procurado do seu local atual
        secaoAtiva.removeChild(containerProcurado);

        // Insere o container procurado no início da seção ativa
        secaoAtiva.insertBefore(containerProcurado, secaoAtiva.firstChild);
    }
}


function ordenar() {
    const activeContainer = document.querySelector(".active");


    const elementosParaOrdenar = Array.from(activeContainer.querySelectorAll(".container-flex"));

    elementosParaOrdenar.sort((a, b) => {
        const produtoA = a.dataset.produto;
        const produtoB = b.dataset.produto;
        return produtoA.localeCompare(produtoB);
    });

    activeContainer.innerHTML = "";

    elementosParaOrdenar.forEach(elemento => {
        activeContainer.appendChild(elemento);
    });
}


function adicionarProduto(containerProduto, sectionAtiva) {
    let clique = false
    const adicionarProduto = new ElementoHTML("#adicionar-produto");
    adicionarProduto.elemento.addEventListener("click", () => {
        if (!clique) {
            const divContainer = document.createElement("div");
            const divInformacaoProduto = document.createElement("div");
            const alimento = document.createElement("p");
            const fabricacao = document.createElement("p");
            const validade = document.createElement("p")
            const btnRemove = document.createElement("button");
            const nomeProduto = new ElementoHTML("#nome-alimento");

            divContainer.classList.add("container-flex");
            divContainer.dataset.produto = nomeProduto.elemento.value;
            alimento.innerHTML = `Produto: <span class="produto">  ${nomeProduto.elemento.value} </span>`;
            fabricacao.textContent = `Data de fabricação: ${new ElementoHTML("#data-fabricacao").elemento.value}`;
            validade.textContent = `Data de validade: ${new ElementoHTML("#data-validade").elemento.value}`;
            btnRemove.innerText = `Remover ${nomeProduto.elemento.value}`;
            btnRemove.addEventListener("click", removeProduto);
            divInformacaoProduto.classList.add("informacoes-produto");
            divInformacaoProduto.append(fabricacao, validade);
            divContainer.append(alimento, divInformacaoProduto, btnRemove)
            sectionAtiva.elemento.appendChild(divContainer);
            sectionAtiva.adicionarClasse("active")
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

export { cancelarAdicionamentoDoProduto, adicionarProduto, trocarAbaProduto, ordenar, moverAlimentoParaInicio };