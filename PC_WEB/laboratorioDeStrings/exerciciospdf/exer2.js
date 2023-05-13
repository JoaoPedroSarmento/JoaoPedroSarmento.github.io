function marcarVogais(carac) {
  let novotexto = "";
    if ("aeiouáàâãéêíóôõú".includes(carac.toLowerCase())) {
      novotexto += `<strong>${carac}</strong>`;
    } else {
      novotexto += carac;
    }
  return novotexto;
}

document.getElementById("marcar").addEventListener("click", () => {
  const input = document.getElementById("input");
  const palavras = input.value.split("");
  console.log(palavras)
  const p = document.getElementById("texto");
  let palavrasMarcadas = "";
  palavras.forEach((carac) => {
    palavrasMarcadas += marcarVogais(carac);
  });
  p.innerHTML = palavrasMarcadas;
});
