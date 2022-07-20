let nome = prompt("Digite algo ");

let inverte = "";

for (let i = nome.length - 1; i >= 0; i--) {
  if (nome[i] == "e") {
    break;
  }
  inverte += nome[i];
}

console.log(inverte);
