window.onload = () => {
  const progress = document.querySelector("progress");
  const main = document.querySelector("main");
  const div = document.getElementById("progress");
  console.log(progress, div, main);
  const intervalo = setInterval(() => {
    progress.value += 20;
    if (progress.value === 100) {
      setTimeout(() => {
        div.style.display = "none";
        main.style.display = "flex";
      }, 1000);
      clearInterval(intervalo);
    }
  }, 1000);
};

const input = document.getElementById("input");
function alternaSvg() {
  const svgs = document.querySelectorAll(".input-icon svg");
  svgs.forEach((svg) => {
    svg.classList.toggle("svg-toggle");
  });
}
input.addEventListener("focusin", () => {
  input.placeholder = "";
  alternaSvg();
});
input.addEventListener("focusout", () => {
  input.placeholder = "Pesquisar ou começar uma nova conversa";
  alternaSvg();
});
