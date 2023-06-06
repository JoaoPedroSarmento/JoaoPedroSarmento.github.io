import { removecapa } from "../removeCapa/removeCapa.js"; // Importando função para remover capa
window.onload = removecapa(); // removendo a capa quando a página for carregada

function ativaEDesativaCheckbox() {
  const inputCheckBox = document.querySelector("input[type='checkbox']");
  inputCheckBox.classList.toggle("active");
}

function mostrarSenha() {
  const inputSenha = document.getElementById("input-senha");
  if (inputSenha.type === "text") {
    inputSenha.type = "password";
  } else {
    inputSenha.type = "text";
  }
}

document
  .querySelector("input[type='checkbox']")
  .addEventListener("click", ativaEDesativaCheckbox);

document
  .querySelector(".input-password img")
  .addEventListener("click", mostrarSenha);
