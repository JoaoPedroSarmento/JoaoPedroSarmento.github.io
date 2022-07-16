let var1 = prompt("Digite um mes \n\n");

switch (var1) {
  case "janeiro":
  case "março":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    alert("Esse mês tem 31 dias");
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    alert("Esse m~es tem 30 dias");
    break;
  case "fevereiro":
    alert("Esse mês tem 28 dias");
    break;
  default:
    alert("Isso não é um mês\n");
}
