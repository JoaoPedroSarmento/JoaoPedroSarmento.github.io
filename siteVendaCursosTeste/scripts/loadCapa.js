function carregamento(milissegundos) {
  let tempo = 0;
  const intervalo = setInterval(() => {
    tempo += 1;
    if (tempo == 3) {
      clearInterval(intervalo);
      document.body.classList.remove("onload");
      document.body.classList.add("load");
      const capa = document.querySelector("div.onload");
      if (capa) {
        capa.remove();
      }
    }
  }, milissegundos);
}
export { carregamento };

window.onload = carregamento(0);
