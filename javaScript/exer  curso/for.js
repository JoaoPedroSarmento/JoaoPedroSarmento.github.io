let nomeNave = prompt("Qual o nome da nave?");
let caracter = prompt("Qual caractere deseja substituir?");
let caracterNovo = prompt("Por qual caractere deseja substituir?");
let nomeNaveNovo = "";

for (let i = 0; i < nomeNave.length; i++) {
  if (nomeNave[i] == caracter) {
    nomeNaveNovo += caracterNovo;
  } else {
    nomeNaveNovo += nomeNave[i];
  }
}

alert("O novo nome é :" + nomeNaveNovo);
