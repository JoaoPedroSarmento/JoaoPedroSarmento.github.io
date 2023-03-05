document.getElementById("Dark").addEventListener("click", function () {
  document.body.style.backgroundColor = "#242424";
  document.body.classList.remove("Light");
  document.body.classList.add("Dark");
});
document.getElementById("Light").addEventListener("click", function () {
  document.body.style.background = "#fff";
  document.body.classList.remove("Dark");
  document.body.classList.add("Light");
});

document.getElementById("Toggle").addEventListener("click", function () {
  if (document.body.classList == "Dark") {
    document.body.classList.toggle("Light");
    document.body.classList.toggle("Dark");
    return (document.body.style.background = "#fff");
  }
  document.body.classList.toggle("Light");
  document.body.classList.toggle("Dark");
  return (document.body.style.background = "#242424");
});
