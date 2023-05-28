import { carregamento } from "../scripts/loadCapa.js";
window.onload = carregamento();

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
  const sectionMenu = document.querySelector("section.display-none") || document.querySelector(".informacoes");
  sectionMenu.classList.toggle("display-none");
}

document
  .querySelector(".close")
  .addEventListener("click", fecharInputDePesquisa);
document
  .querySelector(".search")
  .addEventListener("click", abrirInputDePesquisa);
document.querySelector(".mais-informacoes").addEventListener("click" , mostraMenu);