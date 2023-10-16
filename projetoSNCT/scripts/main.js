import ElementoHTML from "../scripts/ElementoHTML/ElementoHTML.js"
import { cancelarAdicionamentoDoProduto, adicionarProduto, trocarAbaProduto, ordenar , moverAlimentoParaInicio} from "../scripts/funcoes/funcoes.js"
document.getElementById("adicionar-alimento").addEventListener("click", () => {
    const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
    if (containerProduto.elemento.classList.contains("display-none")) {
        containerProduto.removerClasse("display-none")
        cancelarAdicionamentoDoProduto()
        adicionarProduto(containerProduto)
    }
});
new ElementoHTML("#pesquisar svg").elemento.addEventListener("click", moverAlimentoParaInicio)
new ElementoHTML("#nome-alimento-pesquisar").elemento.addEventListener("change" , moverAlimentoParaInicio)
new ElementoHTML(".setas").elemento.addEventListener("click" , ordenar)
trocarAbaProduto()