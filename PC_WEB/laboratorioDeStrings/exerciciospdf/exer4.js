function maiorOcorrencia() {
  const input = document.getElementById("input");
  const div = document.getElementById("div-template-grid");
  let letras = input.value.split(" ").join("");
  const palavras = input.value.split(" ");
  let indice = 0;
  let maior = { quantidade: 0, indiceDaPalavraComMaisRepeticao: indice };
  const palavrasSemRepeticao = palavras.reduce((acumulador, palavra) => {
    if (!acumulador.includes(palavra)) {
      let qtdDePalavras = 0;
      acumulador.push(palavra);
      for (const valor of palavras) {
        if (palavra === valor) {
          qtdDePalavras += 1;
        }
      }
      if (qtdDePalavras > maior.quantidade) {
        maior.quantidade = qtdDePalavras;
        maior.indiceDaPalavraComMaisRepeticao = indice;
      }
      indice++;
    }
    return acumulador;
  }, []);
  div.innerHTML = `<p>Palavra com mais ocorrências: ${
    palavrasSemRepeticao[maior.indiceDaPalavraComMaisRepeticao]
  } </p>
  <p> 
      quantidade de ocorrências: ${
        maior.quantidade
      }</p> <p> Número de palavras no texto: ${
    palavras.length
  }. Total de letras: ${letras.length}
      </p>`;
}

document.getElementById("submit").addEventListener("click", () => {
  maiorOcorrencia();
});
