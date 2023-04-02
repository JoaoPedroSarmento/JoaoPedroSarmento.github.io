const root = document.querySelector(":root");
const btn = document.getElementById("Toggletheme");
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  if (document.body.className === "light") {
   btn.style.background = "#242424"
   btn.style.color = "#fff";
  }else{
    btn.style.background = "#fff"
    btn.style.color = "#242424";
  }
}
btn.addEventListener("click", toggleTheme);
