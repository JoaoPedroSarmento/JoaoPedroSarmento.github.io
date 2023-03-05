const InputAdd = document.getElementById("Add");
const InputRemove = document.getElementById("Remove");
const Saldo = document.getElementById("saldo");
const ButtonClear = document.createElement("button");
const Section = document.getElementById("DisplayInformation");
const Root = document.querySelector(":root");
const AllowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

InputAdd.addEventListener("keydown", (ev) => {
  console.log(ev);
  ev.preventDefault();
  return AllowedKeys.includes(ev.key)
    ? (InputAdd.value += ev.key)
    : ev.key === "Backspace"
    ? (InputAdd.value = InputAdd.value.slice(0, -1))
    : "";
});
InputRemove.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  return AllowedKeys.includes(ev.key)
    ? (InputRemove.value += ev.key)
    : ev.key === "Backspace"
    ? (InputRemove.value = InputRemove.value.slice(0, -1))
    : "";
});

document.getElementById("AddMoney").addEventListener("click", () => {
  const Result = eval(`${Saldo.value} + ${InputAdd.value}`);
  Saldo.value = Result;
  const Div = document.createElement("div");
  const P = document.createElement("p");
  P.innerText = `Valor adicionado ${InputAdd.value}`;
  Div.className = "Add";
  Div.appendChild(P);
  if (Section.children.length === 0) {
    ButtonClear.innerText = "Clear";
    Section.appendChild(ButtonClear);
  }
  Section.insertBefore(Div, Section.firstChild);
});

document.getElementById("RemoveMoney").addEventListener("click", () => {
  const SaldoAnterior = Saldo.value;
  const Result = eval(` ${Saldo.value} - ${InputRemove.value}`);
  Saldo.value = Result;
  if (Saldo.value < 0) {
    Saldo.value = SaldoAnterior;
    return alert("Valor inadequado!!");
  }
  const Div = document.createElement("div");
  const P = document.createElement("p");
  P.innerText = `Valor removido ${InputRemove.value}`;
  Div.className = "Remove";
  Div.appendChild(P);
  if (Section.children.length === 0) {
    ButtonClear.innerText = "Clear";
    Section.appendChild(ButtonClear);
  }
  Section.insertBefore(Div, Section.firstChild);
});

document.getElementById("copy").addEventListener("click", () => {
  navigator.clipboard.writeText(Saldo.value);
  const Button = document.getElementById("copy");
  Button.innerText = "Copiado!";
  console.log(Button.innerText);
  setTimeout(() => {
    Button.innerText = "Copiar";
  }, 1000);
});

ButtonClear.addEventListener("click", () => {
  Section.innerHTML = "";
});
function ThemeDark() {
  document.body.dataset.theme = "dark";
  Root.style.setProperty("--bg-color", "#242424");
  Root.style.setProperty("--font-color-1", "#fff");
  Root.style.setProperty("--font-color-2", "#242424");
  Root.style.setProperty("--btn-bg", "#fff");
}

function ThemeLight() {
  document.body.dataset.theme = "light";
  Root.style.setProperty("--bg-color", "#fff");
  Root.style.setProperty("--font-color-1", "#242424");
  Root.style.setProperty("--font-color-2", "#fff");
  Root.style.setProperty("--btn-bg", "#242424");
}

document.querySelector(".btn-light").addEventListener("click", ThemeLight);
document.querySelector(".btn-dark").addEventListener("click", ThemeDark);
document.querySelector(".btn-switch").addEventListener("click", () => {
  return document.body.dataset.theme === "dark" ? ThemeLight() : ThemeDark();
});
