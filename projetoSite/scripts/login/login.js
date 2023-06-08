import { removecapa } from "../removeCapa/removeCapa.js"; // Importando função para remover capa
window.onload = removecapa(); // removendo a capa quando a página for carregada
const inputCheckBox = document.querySelector("input[type='checkbox']") || null;
const inputSenha = document.getElementById("input-senha") || null;
function ativaEDesativaCheckbox() {
  inputCheckBox.classList.toggle("active");
}

export function mostraSenha() {
  inputSenha.type = inputSenha.type === "text" ? "password" : "text";
  inputSenha.focus();
}
if (inputCheckBox) {
  inputCheckBox.addEventListener("click", ativaEDesativaCheckbox);
}

if (inputSenha) {
  document.querySelector(".fa-eye").addEventListener("click", mostraSenha);
}
