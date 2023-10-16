import ElementoHTML from "../scripts/ElementoHTML/ElementoHTML.js"
import { cancelarAdicionamentoDoProduto, adicionarProduto, trocarAbaProduto, ordenar, moverAlimentoParaInicio } from "../scripts/funcoes/funcoes.js"
document.getElementById("adicionar-alimento").addEventListener("click", () => {
    const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
    if (containerProduto.elemento.classList.contains("display-none")) {
        containerProduto.removerClasse("display-none")
        const sectionAtiva = new ElementoHTML(".active");
        sectionAtiva.removerClasse("active");
        cancelarAdicionamentoDoProduto(sectionAtiva)
        adicionarProduto(containerProduto , sectionAtiva)
    }
});
new ElementoHTML("#pesquisar svg").elemento.addEventListener("click", moverAlimentoParaInicio)
new ElementoHTML("#nome-alimento-pesquisar").elemento.addEventListener("change", moverAlimentoParaInicio)
new ElementoHTML(".setas").elemento.addEventListener("click", ordenar)
trocarAbaProduto()