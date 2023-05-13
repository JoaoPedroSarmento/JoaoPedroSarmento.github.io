function tecnicaTenisPolar(textos) {
  textos = textos.split(" ");
  textos = textos.reverse();
 return textos.join(" ");
}

console.log(tecnicaTenisPolar("Olá Mundo"));

document.getElementById("submit").addEventListener("click" , () => {
    const input = document.getElementById("input");
    const textosInvertidos = tecnicaTenisPolar(input.value);
    const p = document.getElementById("texto");
    p.innerText = textosInvertidos;
})