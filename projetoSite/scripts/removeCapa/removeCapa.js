export function removendoCapa() {
  let tempo = 0;
  const intervalo = setInterval(() => {
    if (tempo === 1) {
      const capa = document.querySelector("div.capa");
      if (capa) {
        // verifcando se a capa existe no documneto html para não gerar nenhum erro!
        capa.remove(); // Removendo a capa do HTML
      }
      clearInterval(intervalo); // Parando com o loop
    }
    tempo += 1;
  }, 1000); // a cada 1 segundo executa o código passado
}
// função exportada!!
