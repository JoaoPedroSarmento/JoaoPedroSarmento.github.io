function fahParaCelcius(fah) {
  return ((fah - 32) * 5) / 9;
}
document.getElementById("fahParaCelcius").addEventListener("click", () => {
  const fah = document.getElementById("fah");
  const preCelcius = document.getElementById("celcius");
  preCelcius.textContent = `Valor de  Fahrenheit: ${
    fah.value
  }, para celcius: ${fahParaCelcius(Number(fah.value))}`;
});
