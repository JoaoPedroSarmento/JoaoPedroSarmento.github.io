function criarCardDoPais(pais) {
    const main = document.getElementById("paises");
    const card = document.createElement("div");
    const nomeDoPais = document.createElement("h1");
    const bandeira = document.createElement("img");

    card.classList.add("pais");

    nomeDoPais.textContent = pais.name.common;
    bandeira.src = pais.flags.svg;
    bandeira.alt = nomeDoPais.textContent;

    card.append(nomeDoPais, bandeira);
    main.appendChild(card);

}
async function obterPaises() {
    const resposta = await fetch("https://restcountries.com/v3.1/all"); // fetch faz a requisição
    const paises = await resposta.json();

    paises.forEach(criarCardDoPais);
}
obterPaises();