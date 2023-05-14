const input = document.getElementById("input");
const inputResult = document.getElementById("result");
const btnCopy = document.getElementById("copy");
const allowedKeys = [" ", ".", "+","-","*","/","%", "(", ")","0","1", "2","3","4","5","6","7","8","9"];
const main = document.querySelector("main")
const root = document.querySelector(":root");
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  return allowedKeys.includes(ev.key)
    ? (input.value += ev.key)
    : ev.key === "Backspace"
    ? (input.value = input.value.slice(0, -1))
    : ev.key === "Enter"
    ? calcular()
    : "";
});
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document.querySelectorAll(".key").forEach(function (Button) {
  Button.addEventListener("click", function (valor) {
    return (input.value += Button.innerText) + Sound();
  });
});
document.getElementById("igual").addEventListener("click", function () {
  return calcular();
;
});
btnCopy.addEventListener("click", function () {
  return navigator.clipboard.writeText(inputResult.value);
});

function calcular() {
  inputResult.value = "Erro";
  console.log(input.value);
  btnCopy.style.cursor = "pointer";
  return input.value === ""
    ? inputResult.value
    : (inputResult.value = eval(input.value));
}

function themeDark() {
  main.dataset.theme = "Dark";
  root.style.setProperty("--bg-color", "#242424");
  root.style.setProperty("--primary-color", "#ffffff");
  root.style.setProperty("--secondary-color", "#222222");
  document.querySelector("header h1").removeAttribute("style");
}
function themeLight() {
  main.dataset.theme = "Light";
  root.style.setProperty("--bg-color", "#fff");
  root.style.setProperty("--primary-color", "#ddd   ");
  root.style.setProperty("--secondary-color", "#242424");
  document.querySelector("header h1").style.color = "#242424";
}

document.getElementById("Toggle").addEventListener("click", function () {
  return main.dataset.theme === "Dark" ? themeLight() : themeDark();
});
