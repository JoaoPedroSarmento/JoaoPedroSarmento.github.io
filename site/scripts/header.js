function ativaHeader() {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", () => {
  ativaHeader();
});
