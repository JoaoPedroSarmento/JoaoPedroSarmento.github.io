const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.setProperty("background-color", "#1f1f1f");
  } else {
    header.style.removeProperty("background-color");
  }
});
