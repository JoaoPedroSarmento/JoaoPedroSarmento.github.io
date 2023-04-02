function novoSalario(salarioAtual, percentual) {
  return salarioAtual * (1 + percentual / 100);
}
document.getElementById("newSalario").addEventListener("click", () => {
  const salario = document.getElementById("salario");
  const percentualDeAjuste = document.getElementById("percent");
  const salarioAjustado = document.getElementById("displaySalarioAjustado");
  salarioAjustado.textContent = `Salário com porcentagem: ${novoSalario(
    salario.value,
    percentualDeAjuste.value
  )}`;
});
