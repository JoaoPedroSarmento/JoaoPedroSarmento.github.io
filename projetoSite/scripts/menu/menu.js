function ativaMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.add("active");
}
function desativaMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.remove("active");
}

const abrirMenu = document.querySelector(".menu-imagem") || false;
const fecharMenu = document.querySelector(".fechar-menu-img") || false;
if (abrirMenu) {
  abrirMenu.addEventListener("click", ativaMenu);
}
if (fecharMenu) {
  fecharMenu.addEventListener("click", desativaMenu);
}
