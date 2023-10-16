import ElementoHTML from "../scripts/ElementoHTML/ElementoHTML.js"
import { cancelarAdicionamentoDoProduto, adicionarProduto, trocarAbaProduto } from "../scripts/funcoes/funcoes.js"
document.getElementById("adicionar-alimento").addEventListener("click", () => {
    const containerProduto = new ElementoHTML(".adicionar-produtos-e-informacoes");
    if (containerProduto.elemento.classList.contains("display-none")) {
        containerProduto.removerClasse("display-none")
        cancelarAdicionamentoDoProduto()
        adicionarProduto(containerProduto)
    }
});

trocarAbaProduto()