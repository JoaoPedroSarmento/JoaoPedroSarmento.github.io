import ElementoHTML from "../ElementoHTML/ElementoHTML.js"
function cancelarAdicionamentoDoProduto(sectionAtiva) {
    const cancelar = new ElementoHTML("#cancelar")
    cancelar.elemento.addEventListener("click", () => {
        const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
        containerProduto.adicionarClasse("display-none")
        sectionAtiva.adicionarClasse("active")
    })
}

function adicionaProdutoNaLixeira(produto) {
    const lixeira = document.querySelector(".lixeira");
    lixeira.appendChild(produto);
}
function trocarParaAbaLixeira() {
    const addAlimento = document.getElementById("adicionar-alimento");
    addAlimento.classList.add("display-none");
    const sectionAtiva = document.querySelector(".active");
    sectionAtiva.classList.remove("active");
    const lixeira = document.querySelector(".lixeira");
    lixeira.classList.add("active");
}

function removerProdutoDaLixeira(produto) {
    const lixeira = document.querySelector(".lixeira");
    if (lixeira.children.item(produto.dataset.indice)) {
        lixeira.removeChild(produto);
    }
}
function recuperarProduto(ev) {
    const btn = ev.currentTarget;
    const container = btn.parentNode;
    const nomeProduto = container.dataset.produto;
    const section = document.querySelector(`.${container.dataset.section}`);
    btn.innerText = `Remover ${nomeProduto}`;
    btn.removeEventListener("click", recuperarProduto)
    btn.addEventListener("click", removeProduto);
    section.appendChild(container);
    removerProdutoDaLixeira(container)
}
function removeProduto(ev) {
    const btn = ev.currentTarget;
    const container = btn.parentNode;
    const section = container.parentNode;
    const nomeProduto = container.dataset.produto;
    btn.innerText = `Recuperar ${nomeProduto}`;
    btn.addEventListener("click", recuperarProduto);
    section.removeChild(container);
    adicionaProdutoNaLixeira(container);
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
        secaoAtiva.removeChild(containerProcurado);
        secaoAtiva.insertBefore(containerProcurado, secaoAtiva.firstChild);
    }
}

function cancelarCarregamento() {
    const div = document.querySelector(".carregamento-inicial");
    setTimeout(() => div.remove(), 1000)
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
            divContainer.dataset.section = sectionAtiva.elemento.dataset.section;
            divContainer.dataset.indice = sectionAtiva.elemento.children.length;
            alimento.innerHTML = `Produto: <span class="produto">  ${nomeProduto.elemento.value} </span>`;
            fabricacao.textContent = `Data de fabricação: ${new ElementoHTML("#data-fabricacao").elemento.value.split("-").reverse().join("-") }`;
            validade.textContent = `Data de validade: ${new ElementoHTML("#data-validade").elemento.value.split("-").reverse().join("-")}`;
            btnRemove.innerText = `Remover ${nomeProduto.elemento.value}`;
            btnRemove.addEventListener("click", removeProduto)
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
function trocarAbaProduto(ev) {
    const geladeira = new ElementoHTML("#geladeira");
    const ambitente = new ElementoHTML("#ambiente");
    const sessoes = document.querySelectorAll(".section-container");
    const lixeira = document.querySelector(".lixeira")
    const addAlimento = document.getElementById("adicionar-alimento");
    geladeira.elemento?.addEventListener("click", () => {
        sessoes[0].classList.add("active")
        sessoes[1].classList.remove("active")
        lixeira.classList.remove("active");
        addAlimento.classList.remove("display-none");
    })
    ambitente.elemento?.addEventListener("click", () => {
        sessoes[0].classList.remove("active")
        lixeira.classList.remove("active");
        addAlimento.classList.remove("display-none");
        sessoes[1].classList.add("active")
    })

}

export { cancelarAdicionamentoDoProduto, adicionarProduto, trocarAbaProduto, ordenar, moverAlimentoParaInicio, cancelarCarregamento, trocarParaAbaLixeira };