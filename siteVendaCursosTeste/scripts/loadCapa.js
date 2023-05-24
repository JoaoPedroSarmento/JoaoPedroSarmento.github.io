function carregamento() {
  let tempo = 0;
  const intervalo = setInterval(() => {
    tempo += 2;
    if (tempo >= 5) {
      console.log(tempo);
      clearInterval(intervalo);
      document.body.classList.remove("onload");
    }
  }, 400);
}
window.onload = carregamento();

export { carregamento };
