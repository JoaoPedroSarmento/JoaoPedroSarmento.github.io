import { carregamento } from "../scripts/loadCapa.js";
window.onload = carregamento(0);

function alternaClasse() {
  const section = document.querySelector(".input-display");
  section.dataset.input = section.dataset.input === "false" ? "true" : "false";
}
function fecharInputDePesquisa() {
  alternaClasse();
}
function abrirInputDePesquisa() {
  alternaClasse();
}

function mostraMenu() {
  const sectionMenu =
    document.querySelector(".container-template-none") ||
    document.querySelector(".section-menu");
  sectionMenu.classList.toggle("container-template-none");
}

document
  .querySelector(".close")
  .addEventListener("click", fecharInputDePesquisa);
document
  .querySelector(".search")
  .addEventListener("click", abrirInputDePesquisa);
document
  .querySelector(".mais-informacoes")
  .addEventListener("click", mostraMenu);
