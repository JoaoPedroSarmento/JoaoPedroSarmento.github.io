function AddInput() {
  const Ul = document.getElementById("inputs");
  const Li = document.createElement("li");
  const Label = document.createElement("label");
  const Input = document.createElement("input");
  Label.innerHTML = "Nome : ";
  Input.type = "text";
  Input.placeholder = "Ex : João";
  Li.innerHTML = "<h3> CONTATOS </h3>";

  Label.appendChild(Input);
  Li.appendChild(Label);
  Ul.appendChild(Li);
}

function RemoveInput() {
  const Ul = document.getElementById("inputs");
  const Li = document.getElementsByTagName("li");
  if (Ul.children.length) {
    Ul.removeChild(Li[Li.length - 1]);
  }
}
