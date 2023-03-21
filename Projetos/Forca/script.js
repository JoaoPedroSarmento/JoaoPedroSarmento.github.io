const forcaFrame = [
 `
   +---+
   |   |
       |
       |
       |
       |
  =========`, `
   +---+
   |   |
   o   |
       |
       |
       |
  =========`,
  `
   +---+
   |   |
   o   |
   |   |
       |
       |
  =========`,
  `
   +---+
   |   |
   o   |
  /|   |
       |
       |
  =========`,
  `
   +---+
   |   |
   o   |
  /|\\  |
       |
       |
  =========`,
  `
   +---+
   |   |
   o   |
  /|\\  |
  /    |
       |
  =========`,
  `
   +---+
   |   |
   o   |
  /|\\  |
  / \\  |
       |
  =========
`,
];
let palavrasForca = [];
const palavraDaForca = document.getElementById("palavra-da-forca");
palavraDaForca.innerText = forcaFrame[0];
const inputPalavras = document.getElementById("input-palavras");
const inputLetra = document.getElementById("input-letra");
const btns  = document.querySelectorAll(".btn");
const enviarTentativaBtn  = document.getElementById("enviar-tentativa");
const acertos = document.getElementById("tentativas-corretas");
const erros = document.getElementById("tentativas-incorretas");
const containerLines = document.getElementById("container-lines");
const sublinhas = document.querySelectorAll(".lines");
const select = document.getElementById("lista-palavras-inseridas");
let letrasCertas = [];
let letrasErradas = [];
let jogando = false;
let posicaoAtualDaForca = 0;
let posicaoDaPalavra = 0;
let tamDaPalavra = 0;

function vitoria() { 
  const sublinhas = document.querySelectorAll(".carac")
  if (sublinhas.length == tamDaPalavra){
    setTimeout(() => {
      const mensagemP = document.getElementById("mensagem");
      mensagemP.innerText = `Você ganhou, a palavra era: ${palavrasForca[posicaoDaPalavra]}`;
      alertMensagem()
    }, 400)
    atualizaJogo()
    return true;  
  }
  else if (posicaoAtualDaForca === 6)  derrota();
  return true;
}
function derrota() {
  palavraDaForca.innerText  = forcaFrame[6];
  setTimeout(() => {
    const mensagemP = document.getElementById("mensagem");
    mensagemP.innerText = `Você perdeu, a palavra era: ${palavrasForca[posicaoDaPalavra]}`;
    alertMensagem()
    atualizaJogo()
   }, 400)
  return true;  
} 

function alertMensagem() {
  const containerAlert = document.getElementById("alert");
  const sections = document.querySelectorAll(".container");
  containerAlert.style.display = "block";
  sections.forEach((section) => section.style.pointerEvents = "none")
    document.getElementById("btn-confirm").addEventListener("click", () =>  {
    containerAlert.style.display = "none"
    sections.forEach((section) => section.style.pointerEvents = "all")
  })
  }
function atualizaJogo() {
  const sublinhas = document.querySelectorAll(".lines");
  posicaoAtualDaForca = 0;
  palavraDaForca.innerText = forcaFrame[0];
  tamDaPalavra = 0;
  jogando = false;
  letrasCertas = [];
  letrasErradas = [];
  inputPalavras.disabled = false;
  inputLetra.value = "";
  inputLetra.disabled = true;
  acertos.innerText = "Acertos:";
  erros.innerText = "Erros:";
  sublinhas.forEach((valor) => containerLines.removeChild(valor))
  btns.forEach((valor) => (valor.disabled = false));
  enviarTentativaBtn.disabled = true;

}

function letraCorreta() {
  const sublinhas = document.querySelectorAll(".lines");
  let palavra = palavrasForca[posicaoDaPalavra];
  let letraCorreta = false;
  sublinhas.forEach((valor,i) => {
  if (palavra[i] == inputLetra.value) {
    letraCorreta = true;
    if (!letrasCertas.includes(inputLetra.value)) {
      letrasCertas.push(inputLetra.value);
      acertos.innerText += ` ${inputLetra.value}/ `;
    }
    valor.setAttribute("class" , "lines carac");
    valor.innerText = `${inputLetra.value}`;

  }
}) 
  return letraCorreta;
}

function letraErrada() {
  if (!letrasErradas.includes(inputLetra.value) && !letraCorreta()){
    letrasErradas.push(inputLetra.value);
    posicaoAtualDaForca += 1; 
    erros.innerText += ` ${inputLetra.value}/ `;
    palavraDaForca.innerText = forcaFrame[posicaoAtualDaForca];
    letrasErradas.push(inputLetra.value);
    return true;
  }
  return letraCorreta();
}
function resetaPalavra() {
  palavrasForca = [];
  const options = document.querySelectorAll(".option-palavra");
  options.forEach((valor) => select.removeChild(valor))
}
function listaPalavrasInseridas() {
  if (inputPalavras.value == "") return;
  palavrasForca.push(inputPalavras.value);
  const option = document.createElement("option");
  option.innerText = inputPalavras.value;
  option.className = "option-palavra";
  select.appendChild(option);
}

function caracteresPermitidos (ev){
  ev.preventDefault()
  if  (ev.key >= "a" && ev.key <= "z" && !jogando) return  inputPalavras.value += ev.key;
  else if  (ev.key >= "a" && ev.key <= "z") return  inputLetra.value = ev.key;
    return (ev.key == "Backspace") ?
    inputPalavras.value = inputPalavras.value.slice(0, -1):
    (ev.key === "Enter" && !jogando) ?
    listaPalavrasInseridas()  : (ev.key === "Enter") ? letraErrada() && vitoria() : ""
}

function adicionaSublinhasEscolhePalavraDoArrayEComecaOJogo() {
  if (!jogando && palavrasForca.length) {
    posicaoDaPalavra =  Math.floor(Math.random() * palavrasForca.length);
    let palavra = palavrasForca[posicaoDaPalavra];
    for (tamDaPalavra = 0; tamDaPalavra < palavra.length; tamDaPalavra += 1) {
      const span = document.createElement("span");
      span.innerText = "_";
      span.className = "lines"
      containerLines.appendChild(span)
    }
    jogando = true;
    inputPalavras.disabled = true;
    inputPalavras.value = "";
    inputLetra.disabled = false;
    btns.forEach((valor) => (valor.disabled = true));
    enviarTentativaBtn.disabled = false;
}
}

inputLetra.addEventListener("keypress" , caracteresPermitidos);
inputPalavras.addEventListener("keypress", caracteresPermitidos);
document.getElementById("resetar-palavras").addEventListener("click" , resetaPalavra)
document.getElementById("ver-palavra").addEventListener("click", function () {
  return inputPalavras.type === "text"
    ? (inputPalavras.type = "password")
    : (inputPalavras.type = "text");
});
document.getElementById("inserir-palavra").addEventListener("click", listaPalavrasInseridas )
document
  .getElementById("botao-comecar-jogo")
  .addEventListener("click", adicionaSublinhasEscolhePalavraDoArrayEComecaOJogo);
enviarTentativaBtn.addEventListener("click", () => {
  letraErrada();
  vitoria();
});
