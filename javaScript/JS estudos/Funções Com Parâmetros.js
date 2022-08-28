let dia = prompt("Digite o dia do seu nascimento\n");
let mes = prompt("Digite o mês do seu nascimento\n");
let ano = prompt("Digite o ano do seu nascimento\n");
let dia2 = prompt("Digite a dia atual\n");
let mes2 = prompt("Digite o mês atual\n");
let ano2 = prompt("Digite o ano atual\n");
let nome = prompt("Digite seu nome : \n");

function AnoDeNascimento(Dia, Mes, Ano, Dia2, Mes2, Ano2) {
  let idade = ano2 - ano;
  let idade2 = ano2 - ano - 1;
  let idade3 = ano2 - ano;

  if (
    ano2 > ano ||
    (ano2 == ano && mes2 > mes) ||
    (ano2 == ano && mes2 == mes && dia2 > dia)
  ) {
    return -1;
  } else if (
    ano2 < ano ||
    (ano == ano2 && mes > mes2) ||
    (ano == ano2 && mes == mes2 && dia > dia2)
  ) {
    return 1;
  }
  return 0;
}

function IdadeDaPessoa(Dia, Mes, Ano, Dia2, Mes2, Ano2) {
  if (
    (ano2 > ano && mes2 > mes) ||
    (ano2 > ano && mes2 == mes && dia2 > dia) ||
    (ano2 > ano && mes2 == mes && dia2 == dia)
  )
    return ano2 - ano;
  else if (
    (ano2 > ano && mes2 < mes) ||
    (ano2 > ano && mes2 == mes && dia2 < dia) ||
    (ano2 > ano && mes2 == mes && dia2 == dia)
  )
    return ano2 - ano - 1;
  else if (nome_idade(dia, mes, ano, dia2, mes2, ano2) == 1) return -1;

  return 0;
}

let idade = IdadeDaPessoa(dia, mes, ano, dia2, mes2, ano2);

let resultado = AnoDeNascimento(dia, mes, ano, dia2, mes2, ano2);

switch (resultado) {
  case -1:
    console.log(
      "Seu nome é : " +
        nome +
        " Você nasceu em  : " +
        dia +
        "/" +
        mes +
        "/" +
        ano +
        "  você tem " +
        idade +
        " ano(s)"
    );
    break;
  case 1:
    console.log(
      "Seu nome é : " +
        nome +
        " Você nasceu em  : " +
        dia +
        "/" +
        mes +
        "/" +
        ano +
        "  você tem " +
        idade +
        " ano(s)"
    );
    break;
  case 0:
    console.log(
      "Seu nome é : " +
        nome +
        " Você nasceu em  : " +
        dia +
        "/" +
        mes +
        "/" +
        ano +
        "  você tem " +
        idade +
        " ano(s)"
    );
    break;
}
