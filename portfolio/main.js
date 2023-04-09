const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  const sections = document.querySelectorAll(".section");
  const menuList = document.querySelector("ul");
  sections.forEach((section) => {
    section.classList.toggle("reduce")
    section.classList.toggle("section-template-grid")
  })
  menu.classList.toggle("menu");
  menu.classList.toggle("menuActive");
  menuList.classList.toggle("menu-list")
  menuList.classList.toggle("menu-close")
});
