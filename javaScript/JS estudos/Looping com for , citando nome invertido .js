let nome = prompt("Insira um nome ");
let i = nome.length - 1;
for (i; nome.length >= i; i--) {
  if (i < 0) {
    break;
  }
  console.log(nome[i]);
}
