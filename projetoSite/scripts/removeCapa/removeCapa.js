export function removecapa() {
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
<<<<<<< HEAD
  }, 500); // a cada 1 segundo executa o código passado
=======
  }, 1000); // a cada 1 segundo executa o código passado
>>>>>>> b2f2b37c359a4ab15f6a8bc54b7e1beb2edfa9ff
}
// função exportada!!
