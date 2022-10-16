function addInput() {
  const ul = document.getElementById("inputs");

  const li = document.createElement("li");

  li.className = "list-item";

  li.innerText = "Novo input";

  const newinput = document.createElement("input");

  newinput.type = "text";

  newinput.name = "Novo input";

  li.appendChild(newinput);

  ul.appendChild(li);
}
