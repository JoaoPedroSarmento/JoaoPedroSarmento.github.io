function alternaPagina() {
  const divProgress = document.querySelector(".onload");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  divProgress.style.display = "none";
  header.style.display = "flex";
  main.style.display = "flex";
  footer.style.display = "flex";
}
window.onload = () => {
  const progress = document.querySelector("progress");
  const intervalo = setInterval(() => {
    progress.value += 50;
    if (progress.value >= 100) {
      clearInterval(intervalo);
      alternaPagina();
    }
  }, 1000);
};
