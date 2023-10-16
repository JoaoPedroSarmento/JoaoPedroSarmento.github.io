import ElementoHTML from "../scripts/ElementoHTML/ElementoHTML.js"
import { cancelarAdicionamentoDoProduto, adicionarProduto, trocarAbaProduto, ordenar, moverAlimentoParaInicio, cancelarCarregamento , trocarParaAbaLixeira } from "../scripts/funcoes/funcoes.js"
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
cancelarCarregamento();
document.querySelector(".icon-lixeira").addEventListener("click" , trocarParaAbaLixeira)
document.querySelector("#pesquisar svg").addEventListener("click", moverAlimentoParaInicio)
document.getElementById("nome-alimento-pesquisar").addEventListener("change", moverAlimentoParaInicio)
document.querySelector(".setas").addEventListener("click", ordenar)
trocarAbaProduto();