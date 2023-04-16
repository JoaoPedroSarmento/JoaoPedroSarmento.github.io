function dataPorExtenso(data) {
  data = data.split("-");
  let mes = +data[1];
  switch (mes) {
    case 01:
      mes = "Janeiro";
      break;
    case 02:
      mes = "Fevereiro";
      break;
    case 03:
      mes = "Março";
      break;
    case 04:
      mes = "Abril";
      break;
    case 05:
      mes = "Maio";
      break;
    case 06:
      mes = "Junho";
      break;
    case 07:
      mes = "Julho";
      break;
    case 08:
      mes = "Agosto";
      break;
    case 09:
      mes = "Setembro";
      break;
    case 10:
      mes = "Outubro";
      break;
    case 11:
      mes = "Novembro";
      break;
     default: 
     mes  = "Dezembro";
     break;
  }
  return mes;
}

document.getElementById("submit").addEventListener("click", () => {
  const inputData = document.getElementById("data");
  const data = inputData.value.split("-");
  const p = document.getElementById("texto");
  p.textContent = `${data[2]} de ${dataPorExtenso(inputData.value)} de  ${data[0]}`;
});
