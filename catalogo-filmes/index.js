function criarCard(filme) {
  const { titulo, resumo, figura, opinioes, generos, elenco, classificacao } =
    filme;
  console.log(filme);
  const box = document.createElement("div");
  box.classList.add("box");

  const boxContentContainer = document.createElement("div");
  boxContentContainer.classList.add("box-content-container");
  box.appendChild(boxContentContainer);
  const img = document.createElement("img");
  img.src = figura;
  img.alt = titulo;
  boxContentContainer.appendChild(img);

  const boxContent = document.createElement("div");
  boxContent.classList.add("box-content");
  boxContentContainer.appendChild(boxContent);

  const tituloElement = document.createElement("h1");
  tituloElement.classList.add("titulo");
  tituloElement.textContent = titulo;
  boxContent.appendChild(tituloElement);

  const generoElement = document.createElement("p");
  generoElement.classList.add("genero")
  generoElement.textContent = generos;
  boxContent.appendChild(generoElement);

  const elencoElement = document.createElement("p");
  elencoElement.classList.add("elenco");
  elencoElement.innerHTML = ` <strong>Elenco:</strong> ${elenco} `;
  boxContent.appendChild(elencoElement);

  const boxContent2 = document.createElement("div");
  boxContent2.classList.add("box-content");
  boxContentContainer.appendChild(boxContent2);

  const faixaEtariaElement = document.createElement("div");
  faixaEtariaElement.setAttribute("class", `faixa-etaria , ${definirCorDeFundoFaixaEtaria(classificacao)}`)
  faixaEtariaElement.textContent = classificacao;
  boxContent2.appendChild(faixaEtariaElement);

  const estrelasElement = document.createElement("div");
  estrelasElement.classList.add("estrelas");
  console.log(opinioes[0].rating);
  estrelasElement.textContent = adicionaEstrela(estrelasElement, opinioes[0].rating);
  boxContent2.appendChild(estrelasElement);

  const descricaoElement = document.createElement("p");
  descricaoElement.classList.add("descricao");
  descricaoElement.textContent = resumo;
  box.appendChild(descricaoElement);

  document.getElementById("filmes").appendChild(box);
}

async function obterFilmes() {
  const resposta = await fetch(
    "https://rafaelescalfoni.github.io/desenv_web/filmes.json"
  );
  const filmes = await resposta.json();
  filmes.forEach(criarCard);
}

function definirCorDeFundoFaixaEtaria(faixaEtaria) {
  if (faixaEtaria >= 18) {
    return "vermelho";
  } else if (faixaEtaria > 14) {
    return "amarelo";
  } else {
    return "verde";
  }
}

function adicionaEstrela(item, estrelas) {
  for (let i = 1; i <= 5; i += 1) {
    console.log(estrelas)
    if (i <= estrelas) {
      item.textContent += "★";
    } else {
      item.textContent += "☆";
    }
  }
  return item.textContent;
}
obterFilmes();
