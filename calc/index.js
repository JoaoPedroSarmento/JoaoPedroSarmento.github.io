const teclasPermitidas = [
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
  ".",
  " ",
  "+",
  "-",
  "*",
  "/",
  "(",
  ")",
];
const root = document.querySelector(":root");
const main = document.querySelector("main");
const input = document.getElementById("input"); 
const inputResultado = document.getElementById("result");
input.addEventListener("keypress", (event) => {
  event.preventDefault();
  if (teclasPermitidas.includes(event.key)) {
    return (input.value += event.key);
  } else if (event.key == "Enter") {
    return calculo();
  }
});

function calculo() {
  inputResultado.value = "Erro";
  return (inputResultado.value = eval(input.value));
}

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus();
});
document.getElementById("igual").addEventListener("click", () => calculo());

document.querySelectorAll(".Key").forEach((elemento) => {
  elemento.addEventListener(
    "click",
    () => (input.value += elemento.textContent)
  );
});
document
  .getElementById("Copy")
  .addEventListener("click", () =>
    navigator.clipboard.writeText(inputResultado.value)
  );
function themeDark (){
    main.dataset.theme = "dark";
    root.style.setProperty("--bg-color" , "#242424");
    root.style.setProperty("--primary-color" , "#ffffff");
    root.style.setProperty("--secondary-color" , "#222222");
}
function themeLight (){
    main.dataset.theme = "light";
    root.style.setProperty("--bg-color" , "#ffffff");
    root.style.setProperty("--primary-color" , "#242424");
    root.style.setProperty("--secondary-color" , "#222222");
}

document.getElementById("Toggle").addEventListener("click" , () => {
    if(main.dataset.theme === "light"){
        return themeDark();
    }else{
        return themeLight();
    }
})