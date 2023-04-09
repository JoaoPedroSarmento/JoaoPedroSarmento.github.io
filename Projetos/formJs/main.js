function retornaNumeros(ev, input) {
  ev.preventDefault();
  return ev.key >= "0" && ev.key <= "9" ? (input.value += ev.key) : "";
}
let contInput = 0;
let focus = false;
const inputIdade = document.getElementById("idade");
const inputNumero = document.getElementById("numero");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const submit = document.getElementById("submit");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");

inputIdade.addEventListener("keypress", (ev) => retornaNumeros(ev, inputIdade));
inputNumero.addEventListener("keypress", (ev) =>
  retornaNumeros(ev, inputNumero)
);
function inputNotVoid() {
  let contVoidInput = 0;
  inputs.forEach((input) => {
    if (input.value === "") {
      contVoidInput += 1;
    }
  });
  return contVoidInput == 0;
}
submit.addEventListener("click", (ev) => {
  ev.preventDefault();
  inputs.forEach((input) => {
    if (input.value === "") {
      input.style.setProperty("border", "1px solid #990000");
      if (!focus) {
        input.focus();
        focus = true;
      }
    } else {
      input.style.setProperty("border", "1px solid green");
    }
  });
  focus = false;
  if (inputNotVoid()) {
    inputNumero.value = "";
    inputNome.value = "";
    inputEmail.value = "";
    inputIdade.value = "";
    inputNome.focus();
    contInput = 0;
    inputs.forEach((input) => {
      input.style.setProperty("border", "0px");
    });
  }
});
