const titulos = document.querySelectorAll(".titulo");
const generosHTML = document.querySelectorAll(".genero");
const elencos = document.querySelectorAll(".elenco");
const faixasEtarias = document.querySelectorAll(".faixa-etaria");
const descricoes = document.querySelectorAll(".descricao");
const imagens = document.querySelectorAll("img");
function definirCorDeFundoFaixaEtaria(faixaEtaria) {
  if (faixaEtaria >= 18) {
    return "vermelho";
  } else if (faixaEtaria > 14) {
    return "amarelo";
  } else {
    return "verde";
  }
}

const requisicao = new XMLHttpRequest();
requisicao.open(
  "GET",
  "https://rafaelescalfoni.github.io/desenv_web/filmes.json"
);

requisicao.send();
requisicao.addEventListener("readystatechange", function () {
  if (requisicao.readyState === 4 && requisicao.status === 200) {
    const informacoes = JSON.parse(requisicao.responseText);
    console.log(informacoes);
    informacoes.forEach(function (item, indice) {
      console.log(item);
      const { titulo, resumo, figura, rating, generos, elenco, classificacao } =
        item;
      titulos[indice].textContent = titulo;
      generosHTML[indice].textContent = generos;
      elencos[indice].textContent += elenco;
      faixasEtarias[indice].textContent = classificacao;
      faixasEtarias[indice].classList.add(
        definirCorDeFundoFaixaEtaria(classificacao)
      );
      descricoes[indice].textContent = resumo;
      imagens[indice].src = figura;
    });
  } else {
    console.log("Erro");
  }
});
