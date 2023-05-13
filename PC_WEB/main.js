const root = document.querySelector(":root");
const btn = document.getElementById("Toggletheme");
const a = document.querySelectorAll("h3 a");
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  if (document.body.className === "light") {
   btn.style.background = "#242424"
   btn.style.color = "#fff";
   a.forEach((valor)=> {
    valor.style.setProperty("color" , "#242424")
   })
  }else{
    btn.style.background = "#fff"
    btn.style.color = "#242424";
    a.forEach((valor)=> {
      valor.style.setProperty("color" , "#fff")
     })
  }
}
btn.addEventListener("click", toggleTheme);

document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("keypress", (ev) => {
    ev.preventDefault();
    if ((ev.key >= "0" && ev.key <= "9") || ev.key === "." || ev.key === "-") {
      return (input.value += ev.key);
    }
  });
});