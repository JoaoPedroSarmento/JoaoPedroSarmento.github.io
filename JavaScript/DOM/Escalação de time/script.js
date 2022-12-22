let i = 0;
function VerificaNome_e_PosicaoDoJogador(name, position) {
  const nome = name;
  const posicao = position;

  if (nome.length == 0 || posicao.length == 0) return false; 
  for (let i = 0; i <= posicao.length - 1 && i <= nome.length - 1; i++) {
    if (nome[i] <= 0 || (nome[i] >= 1 && posicao[i] <= 0) || posicao[i] >= 1) {
      if (nome[i] != " " || posicao[i] != " ") {
        return false; 
      }
    }
  }
  return true;
}
function VerificaNumeroDACamisaDoJogador(NumeroDAcamisa)
{
  const Numerodacamisa = NumeroDAcamisa;
  
 if(Numerodacamisa >= 0  )
 {
  return true;
 }
 return false;
}

function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const camisa = document.getElementById("camisa").value;

  const players = document.getElementById("players");

  const ul = document.createElement("ul");

  const posicao = document.createElement("li");
  const nome = document.createElement("li");
  const NumeroDaCamisa = document.createElement("li");

  posicao.innerHTML = '<h3> A posição do jogador é :  </h3>' ;
  nome.innerText = "O nome do jogador é " + name;
  NumeroDaCamisa.innerText = "O número da camisa é  " + camisa;

  ul.append(posicao, nome, NumeroDaCamisa);

  if (VerificaNome_e_PosicaoDoJogador(name, position) && VerificaNumeroDACamisaDoJogador(camisa)) {
    players.appendChild(ul);
    return true;
  } else {
    alert("Erro. Digite novamente...");
    return false;
  }
  
}



function RemovePlayer() {
  let r = prompt(
    "Deseja remover o primeiro jogador da lista ? 1- Sim , outro valor - não "
  );
  const Article = document.getElementById("players");

  const ul = document.getElementsByTagName("ul");
  const li = document.getElementsByTagName("li");
  if (r == 1) {
    Article.removeChild(ul[0]);
  }
}
