  const input = document.getElementById("text");
  const btn = document.getElementById("dados");
  const textArea = document.getElementById("textArea");

  const qtdDeLetras = () => {
    let qtdLetras = 0;
    const acentos = ['á', 'à', 'â', 'ã', 'ä', 'é', 'è', 'ê', 'ë', 'í', 'ì', 'î', 'ï', 'ó', 'ò', 'ô', 'õ', 'ö', 'ú', 'ù', 'û', 'ü', 'ç'];
    for (let i = 0; i < input.value.length; i += 1) {
      let carac = input.value[i].toLowerCase();
      if ((carac >= "a" && carac <= "z") || acentos.includes(carac)) {
        qtdLetras += 1;
      }
    }
    return qtdLetras;
  };

  const qtdDepalavras = () => input.value.split(" ").length;

  const ocorrenciaDePalavras = () => {
    const arrayPalavras = input.value.split(" ");
    let arrayClonePalavras = [];
    let palavrasRepetidasQtd = 0;
    for(let i = 0; i < arrayPalavras.length; i+=1 ){
      let palavra = arrayPalavras[i];
      if(!arrayClonePalavras.includes(palavra)){
        arrayClonePalavras.push(palavra)
      }else if(arrayClonePalavras.includes(palavra)){
        palavrasRepetidasQtd+=1;
      }
    }
    return palavrasRepetidasQtd;
  };

  function marcandoPalavraDigitadaESubstituindoPalavra() {
    const palavras = input.value.split(" ");
    let novoTexto = "";
    for (let i = 0; i < palavras.length; i++) {
      const palavra = palavras[i];
      const marcada = `<span style="background-color: #fff; color: #242424;">${palavra}</span>`;
      if (textArea.textContent.includes(palavra)) {
        novoTexto += marcada;
      } else {
        novoTexto += palavra;
      }
      novoTexto += " ";
    } 
    textArea.innerHTML = novoTexto;
  }

  btn.addEventListener("click", () => {
    marcandoPalavraDigitadaESubstituindoPalavra();
    const display = document.getElementById("display");
    display.textContent = `Quantidade de palavras ${qtdDepalavras()},
  Quantidade de letras ${qtdDeLetras()}
  Quantidade de ocorrência de palavras ${ocorrenciaDePalavras()}
  `;
  });
