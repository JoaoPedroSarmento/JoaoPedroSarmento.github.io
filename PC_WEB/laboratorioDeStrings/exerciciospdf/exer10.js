function diferencaEntreDuasDatas(data1, data2) {
  const data1Obj = new Date(data1);
  const data2Obj = new Date(data2);
  const diferenca = Math.abs(data2Obj - data1Obj);

  return Math.floor(diferenca / (1000 * 60 * 60 * 24 * 7));
}

document.getElementById("submit").addEventListener("click", () => {
  const data1 = document.getElementById("data1").value;
  const data2 = document.getElementById("data2").value;
  const p = document.getElementById("texto");
  p.textContent = diferencaEntreDuasDatas(data1, data2) + " semana(s)";
});
