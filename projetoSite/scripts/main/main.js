import { removecapa } from "../removeCapa/removeCapa.js"; // Importando função para remover capa
import { gerenciarSlides } from "../slide/slide.js";
window.onload = removecapa(); // removendo a capa quando a página for carregada
function voltarAoHeader() {
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".voltar-topo");
    if (scrollY > 20) {
      btn.classList.remove("desativado");
      btn.classList.add("ativado");
    } else if (screenY < 20) {
      btn.classList.remove("ativado");
      btn.classList.add("desativado");
    }
  });
}
voltarAoHeader();
gerenciarSlides();
