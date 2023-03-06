document.getElementById("nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav__toggle").classList.toggle("active");
  const root = document.querySelector(":root");
  const body = document.body;
  if (body.dataset.theme === "dark") {
    body.dataset.theme = "light";
    root.style.setProperty("--bg-color", "#F5F5F5");
    root.style.setProperty("--font-color", "#242424");
    root.style.setProperty("--bg-color-itens", "#242424");
    root.style.setProperty("--color-itens", "#FFF");
    root.style.setProperty("--border-color-itens", "#FFF");
    return;
  }
  body.dataset.theme = "dark";
  root.style.setProperty("--bg-nav-toggle", "#262626");
  root.style.setProperty("--bg-color", "#242424");
  root.style.setProperty("--font-color", "#f5f5f5");
  root.style.setProperty("--bg-color-itens", "#fff");
  root.style.setProperty("--color-itens", "#000");
  root.style.setProperty("--border-color-itens", "#000");
});

const menuButton = document.querySelector(".nav");
const menuLines = document.querySelectorAll(".nav__menu-line");
const sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", () => {
  menuLines.forEach((line) => line.classList.toggle("open"));
  sidebar.classList.toggle("sidebar--open");
});
