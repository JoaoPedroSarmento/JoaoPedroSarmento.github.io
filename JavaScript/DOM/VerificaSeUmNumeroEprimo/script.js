function VerificaNumeroPrimo(n) {
  let num = n;
  let i = 2;
  if (num < i) return false;
  for (i; i < num; i++) if (num % i == 0) return false;
  return true;
}

function RetornoDoNumeroPrimo() {
  const n = document.getElementById("input").value;
  const p = document.getElementById("p");
  if (VerificaNumeroPrimo(n)) {
    return (p.innerText = "O número " + n + " é um número primo");
  }
  return (p.innerText = "O número " + n + "  não é um número primo");
}
