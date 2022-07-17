let nave = prompt("Digite o  nome da nave\n");
    
let dobra = prompt("Deseja entrar na dobra ?");

let dobras = 0;

  if (dobra == "sim" || dobra == "s" || dobra == "SIM" || dobra == "Sim") 
       {//1
   dobras++;
  if (dobra == "sim" || dobra == "s" || dobra == "SIM" || dobra == "Sim") 
 {//2
   while (dobra == "sim" || dobra == "s" || dobra == "SIM" || dobra == "Sim") 
   {//3
      dobra = prompt("Deseja entrar na dobra (novamente) ?");
      dobras++;
   }//3
 }//2
        }//1
  else if (dobra == "nao" || dobra == "n") {
  alert("O nome  da nave é : " + nave + " dobra[s] = " + dobras);
  }

  alert("O nome  da nave é : " + nave + " dobra[s] =   " + dobras);
