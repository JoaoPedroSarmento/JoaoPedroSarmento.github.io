import { removecapa } from "../removeCapa/removeCapa.js";
window.onload = removecapa();
function ativaEDesativaDropwDownMenu() {
  document.querySelector(".drop-down-menu").classList.toggle("display-none");
  document
    .querySelector(".drop-down-menu")
    .classList.toggle("display-flex-nowrap");
}

function ativaEDesativaAbaDePesquisa() {
  const sectionPesquisa =
    document.querySelector(".desativado-search") ||
    document.querySelector(".ativado-search");
  sectionPesquisa.classList.toggle("desativado-search");
  sectionPesquisa.classList.toggle("ativado-search");
  sectionPesquisa.classList.toggle("display-none");
}

document
  .querySelector(".drop-down-menu-style")
  .addEventListener("click", ativaEDesativaDropwDownMenu);
document
  .querySelector(".search")
  .addEventListener("click", ativaEDesativaAbaDePesquisa);
document
  .querySelector(".fechar img")
  .addEventListener("click", ativaEDesativaAbaDePesquisa);
