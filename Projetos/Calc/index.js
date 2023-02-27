const Main = document.querySelector("main");
const Root = document.querySelector(":root");
const Input = document.getElementById("input"); // Input  de dados para cálculos
const ResultInput = document.getElementById("result"); // Input para mostrar o resultado das contas

Input.value = 0;
// Teclas que são permitidaas
const AllowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".CharKey").forEach(function (ev) {
  // Verifica teclas que foram clicadas
  ev.addEventListener("click", function () {
    if (Input.value[0] == 0) Input.value = "";
    Input.value += ev.dataset.value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  // Limpa o Input
  return (Input.value = 0) + Input.focus();
});
Input.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (AllowedKeys.includes(event.key)) {
    // Verifica se o valor digitado é permitido2
    if (Input.value[0] == 0) Input.value = "";
    Input.value += event.key;
  }

  if (event.key === "Backspace") {
    //Verifica se o Backspace foi clicado, se for clicado irá excluir a última letra
    Input.value = Input.value.slice(0, -1);
    const InputArray = Input.value.split("");
    Input.value = !InputArray.length ? 0 : Input.value;
  }
  if (event.key === "Enter") {
    // Verifica se o enter foi clicado, se for irá mostrar o resultado do cálculo
    Calculate();
  }
});

document.getElementById("equal").addEventListener("click", Calculate); // Se o botão de Igual for clicado irá executar a função Calculate

function Calculate() {
  ResultInput.value = "Error";
  ResultInput.value = eval(Input.value);
  document.getElementById("copyToClipboard").style.cursor = "pointer";
}

document.getElementById("themeSwitcher").addEventListener("click", function () {
  // Alterando tema do  site
  if (Main.dataset.theme === "dark") {
    Root.style.setProperty("--bg-color", "#f1f5f9");
    Root.style.setProperty("--border-color", "#aaa");
    Root.style.setProperty("--font-color", "#212529");
    Root.style.setProperty("--primary-color", "#26834a");
    Main.dataset.theme = "light";
    return;
  }
  Root.style.setProperty("--bg-color", "#212529");
  Root.style.setProperty("--border-color", "#666");
  Root.style.setProperty("--font-color", "#f1f5f9 ");
  Root.style.setProperty("--primary-color", "#4dff91");
  Main.dataset.theme = "dark";
});

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy" && ResultInput.value !== "") {
      button.innerText = "Copiado!";
      button.classList.add("success");
      return navigator.clipboard.writeText(ResultInput.value);
    }
    button.innerText = "Copy";
    return button.classList.remove("success");
  });
