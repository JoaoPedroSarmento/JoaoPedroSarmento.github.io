document.getElementById("toggle").addEventListener("click", () => {
  const div = document.querySelector("header + div");
  div.classList.toggle("menu-display-none");
  div.classList.toggle("menu-display");
});
