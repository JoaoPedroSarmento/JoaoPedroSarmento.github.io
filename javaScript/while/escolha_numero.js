let n = prompt("EScolha um numero maior ou igual  a 10\n\n");
console.log(n);

if (n < 10) {
  alert("Esse numero e menor que 10, digite novamentente");
  while (n < 10) {
    alert("Esse numero e menor que 10, digite novamentente");
    n = prompt("Escolha novamente um numero\n");
    console.log(n);
    if (n > 10) {
      alert("O número " + n + " é maior que 10 ");
    }
    if (n == 10) {
      alert("O número digitado é igual  a  10 ");
    }
  }
}

if (n > 10) {
  alert("O número " + n + " é maior que 10 ");
}
if (n == 10) {
  alert("O número digitado  é igual  a  10 ");
}
