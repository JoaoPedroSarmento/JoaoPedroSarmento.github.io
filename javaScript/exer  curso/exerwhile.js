//terminar exercicío
let nave = prompt("Digite o  nome da nave\n");

let dobra = prompt("Deseja entrar na dobra ?");

let dobras = 0;

if (dobra == "sim" || dobra == "s" || dobra == "SIM" || dobra == "Sim") {
  dobras++;
  if (dobra == "sim" || dobra == "s" || dobra == "SIM" || dobra == "Sim") {
    while (dobra == "sim" || dobra == "s" || dobra == "SIM" || dobra == "Sim") {
      dobra = prompt("Deseja entrar na dobra (novamente) ?");
      dobras++;
    }
  }
} else if (dobra == "nao" || dobra == "n") {
  alert("O nome  da nave é : " + nave + " dobra[s] = " + dobras);
}

alert("O nome  da nave é : " + nave + " dobra[s] =   " + dobras);
