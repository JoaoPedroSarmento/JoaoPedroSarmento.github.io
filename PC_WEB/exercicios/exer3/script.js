const n1 = document.getElementById("n1");

function numPrimo(n) {
  n = Number(n);
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) return false;
  }
  return n > 1;
}

document.getElementById("numeroPrimo").addEventListener("click", () => {
  const textN1 = document.getElementById("textN1");
  textN1.textContent = numPrimo(n1.value)
    ? `O número ${n1.value} é primo`
    : `O número ${n1.value} não é primo`;
});
