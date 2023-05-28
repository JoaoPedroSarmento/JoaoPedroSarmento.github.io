function carregamento() {
  let tempo = 0;
  const intervalo = setInterval(() => {
    tempo += 2;
    if (tempo >= 5) {
      clearInterval(intervalo);
      document.body.classList.remove("onload");
      document.body.classList.add("load")
    }
  }, 0);
}
window.onload = carregamento();
export { carregamento };
