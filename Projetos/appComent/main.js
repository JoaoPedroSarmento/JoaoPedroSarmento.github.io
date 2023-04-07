let qtdDeComentarios = 0;
function addComent() {
  const contComentarios = document.getElementById("comentN");
  const section = document.getElementById("comentarios");
  const inputNome = document.getElementById("inputName");
  const inputComent = document.getElementById("inputComent");
  const nome = inputNome.value;
  const comentario = inputComent.value;
  if(nome != "" && comentario != ""){
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  div.setAttribute("class", "div-grid div-coment");
  h4.setAttribute("class", "name");
  h4.textContent = nome;
  p.textContent = comentario;
  div.append(h4, p);
  section.appendChild(div);
  qtdDeComentarios+=1;
  contComentarios.textContent = `${qtdDeComentarios} Comentários`;
}
}
document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("keypress" , (ev) => {
    return (ev.key === "Enter") ? addComent() : "";
  })
})
document.getElementById("gerarComentario").addEventListener("click", addComent);
