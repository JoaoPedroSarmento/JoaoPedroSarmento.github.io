function ocorrenciaDasPalavras(table) {
  const input = document.getElementById("input");
  const palavras = input.value.split(" ");
  let indice = 0;
  const palavrasSemRepeticao = palavras.reduce((acumulador, palavra) => {
    if (!acumulador.includes(palavra)) {
      let qtdDePalavras = 0;
      acumulador.push(palavra);
      for (const valor of palavras) {
        if (palavra === valor) {
          qtdDePalavras += 1;
        }
      }
      console.log(acumulador[indice], indice);
      table.innerHTML += `  <tr>
        <td>${acumulador[indice]}</td>
        <td>${qtdDePalavras}</td>
    </tr>`;
      indice += 1;
    }
    return acumulador;
  }, []);
  return table.innerHTML;
}

document.getElementById("ocorrencia").addEventListener("click", () => {
  const table = document.getElementById("displayTabela");
  table.innerHTML = `
    <tr>
        <th>Palavras</th>
        <th>ocorrencias</th>
    </tr>
</table>`;
  table.innerHTML = ocorrenciaDasPalavras(table);
});
