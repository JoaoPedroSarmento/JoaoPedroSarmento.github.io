const Input = document.getElementById("input");
const InputResult = document.getElementById("result");
const BtnCopy = document.getElementById("Copy");
const Root = document.querySelector(":root");
const Main = document.querySelector("main");
const AllowedsKeys = [
  " ",
  ".",
  "+",
  "-",
  "*",
  "/",
  "%",
  "(",
  ")",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

Input.addEventListener("keypress", function (ev) {
  ev.preventDefault();
  return AllowedsKeys.includes(ev.key)
    ? (Input.value += ev.key)
    : ev.key === "Backspace"
    ? (Input.value = Input.value.slice(0, -1))
    : ev.key === "Enter"
    ? Calculate()
    : "";
});

document.getElementById("clear").addEventListener("click", function () {
  Input.value = "";
  Input.focus();
});

document.querySelectorAll(".Key").forEach(function (Button) {
  Button.addEventListener("click", function (valor) {
    return (Input.value += Button.innerText);
  });
});
document.getElementById("igual").addEventListener("click", function () {
  return Calculate();
});
BtnCopy.addEventListener("click", function () {
  return navigator.clipboard.writeText(InputResult.value);
});

function Calculate() {
  InputResult.value = "Erro";
  console.log(Input.value);
  BtnCopy.style.cursor = "pointer";
  return Input.value === ""
    ? InputResult.value
    : (InputResult.value = eval(Input.value));
}

function ThemeDark() {
  Main.dataset.theme = "Dark";
  Root.style.setProperty("--bg-color", "#242424");
  Root.style.setProperty("--primary-color", "#ffffff");
  Root.style.setProperty("--secondary-color", "#222222");
  document.querySelector("header h1").removeAttribute("style");
}
function ThemeLight() {
  Main.dataset.theme = "Light";
  Root.style.setProperty("--bg-color", "#fff");
  Root.style.setProperty("--primary-color", "#ddd   ");
  Root.style.setProperty("--secondary-color", "#242424");
  document.querySelector("header h1").style.color = "#242424";
}

document.getElementById("Toggle").addEventListener("click", function () {
  return Main.dataset.theme === "Dark" ? ThemeLight() : ThemeDark();
});
