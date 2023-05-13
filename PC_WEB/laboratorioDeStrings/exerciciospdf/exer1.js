function inverterCaracteres (palavra){
  palavra = palavra.split("");
  palavra = palavra.reverse();
  return  palavra.join("");
}

document.getElementById("inverter").addEventListener("click" , () => {
  const input = document.getElementById("input");
  let arrayPalavras = input.value.split(" ");
  arrayPalavras =  arrayPalavras.map((palavra)=> {
    return inverterCaracteres(palavra);
  })
  console.log(arrayPalavras);
 arrayPalavras = arrayPalavras.join(" ");
 document.getElementById("palavraInvertida").textContent = arrayPalavras;
})

 