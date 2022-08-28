let mes = prompt("Digite em número que corresponda a um mês  ");
function MesEscolhido() {
  if (mes == 1) {
    let m = document.querySelector("#mes");
    m.innerText = "janeiro";
  } else if (mes == 2) {
    let m = document.querySelector("#mes");
    m.innerText = "fevereiro";
  } else if (mes == 3) {
    let m = document.querySelector("#mes");
    m.innerText = "março";
  } else if (mes == 4) {
    let m = document.querySelector("#mes");
    m.innerText = "abril";
  } else if (mes == 5) {
    let m = document.querySelector("#mes");
    m.innerText = "maio";
  } else if (mes == 6) {
    let m = document.querySelector("#mes");
    m.innerText = "junho";
  } else if (mes == 7) {
    let m = document.querySelector("#mes");
    m.innerText = "julho";
  } else if (mes == 8) {
    let m = document.querySelector("#mes");
    m.innerText = "agosto";
  } else if (mes == 9) {
    let m = document.querySelector("#mes");
    m.innerText = "setembro";
  } else if (mes == 10) {
    let m = document.querySelector("#mes");
    m.innerText = "outubro";
  } else if (mes == 11) {
    let m = document.querySelector("#mes");
    m.innerText = "novembro";
  } else {
    let m = document.querySelector("#mes");
    m.innerText = "dezembro";
  }
}
function RetornaOmes(mes) {
  if (mes > 12 || mes < 1) {
    while (1) {
      let NaoeMes = document.querySelector("#mes");
      NaoeMes.innerText = " ANIMAL --- > mês " + mes + " não existe ";
      console.log(" ANIMAL --- > mês " + mes + " não existe ");
      break;
    }
  } else if (mes <= 12) {
    switch (mes) {
      case "1":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("janeiro");
        break;
      case "2":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Fevereiro");
        break;
      case "3":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Março");
        break;
      case "4":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Abril");
        break;
      case "5":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Maio");
        break;
      case "6":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Junho");
        break;
      case "7":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Julho");
        break;
      case "8":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Agosto");
        break;
      case "9":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Setembro");
        break;
      case "10":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Outubro");
        break;
      case "11":
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Novembro");
        break;
      default:
        document.querySelector("#mes").addEventListener("click", MesEscolhido);
        console.log("Dezembro");
        break;
    }
  }
}

RetornaOmes(mes);
