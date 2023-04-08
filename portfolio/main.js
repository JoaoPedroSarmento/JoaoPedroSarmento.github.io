const menu = document.querySelector(".nav-bar div");
menu.addEventListener("click", () => {
  const menuList = document.querySelector(".menu-list");
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");
  header.classList.toggle("menuToggle");
  header.classList.toggle("menuToggleX");
  menu.classList.toggle("menu");
  menu.classList.toggle("menuX");
  sections.forEach((section) => {
    section.classList.toggle("reduce");
  });
  menuList.dataset.display =
    menuList.dataset.display === "none" ? "grid" : "none";
});
