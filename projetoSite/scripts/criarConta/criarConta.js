import { removecapa } from "../removeCapa/removeCapa.js"; // Importando função para remover capa
import { mostraSenha } from "../login/login.js";
window.onload = removecapa(); // removendo a capa quando a página for carregada

document
  .querySelector(".input-password .fa-eye")
  .addEventListener("click", mostraSenha);
