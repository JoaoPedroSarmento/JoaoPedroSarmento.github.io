const menu = document.querySelector(".nav-bar div");
menu.addEventListener("click", () => {
  const menuList = document.querySelector(".menu-list");
  menu.classList.toggle("menu");
  menu.classList.toggle("menuX");
  menuList.dataset.display =
    menuList.dataset.display === "none" ? "grid" : "none";
});
