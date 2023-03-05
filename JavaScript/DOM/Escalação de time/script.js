function AddPlayer() {
  const Article = document.getElementById("players");
  const Position = document.getElementById("position").value;
  const Name = document.getElementById("name").value;
  const Camisa = document.getElementById("camisa").value;
  const H3 = document.createElement("h3");
  H3.innerText = "Jogadores : ";
  const Div = document.createElement("div");
  if (Position.length && Name.length && Camisa.length) {
    if (Position >= 1 && Position <= 9) {
      alert("A posição não pode possuir  números");
      alert("O nome não pode possui números");
      return false;
      ``;
    } else if (Name >= 1 && Name <= 9) {
      alert("O nome não pode possui números");
      alert("A posição não pode possuir  números");
      return false;
    } else {
      Div.className = "container";
      Div.appendChild(H3);
      Div.innerHTML = `<h4> Nome :  ${Name}</h4> <h4> Posição : ${Position}  </h4> <h4>Número da camisa : ${Camisa} </h4>  `;
      Article.appendChild(Div);
      return true;
    }
  } else {
    alert("Espaço vazio ou valor da camisa possuí alguma letra");
  }
}
function RemovePlayer() {
  const Article = document.getElementById("players");
  const Div = document.querySelectorAll("article > div");
  if (Article.children.length) {
    Article.removeChild(Div[Div.length - 1]);
  } else {
    alert("Não há nenhum jogador escalado!!");
  }
}
