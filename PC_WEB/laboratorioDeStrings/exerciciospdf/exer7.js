// Verificar se: Carac minúsculo e Carac maiúsculo, Carac especiais, e Num;
function letraMinuscula(carac) {
  return carac >= "a" && carac <= "z";
}
function letraMaiuscula(carac) {
  return carac >= "A" && carac <= "Z";
}

function caracEspecial(carac) {
  return "@#!$%&*()-+.=".includes(carac);
}
function caracNumero(carac) {
  return carac >= "0" && carac <= "9";
}
function verificaSenha(senha) {
  let caracMinusculo = false;
  let caracMaiusculo = false;
  let caracterEspecial = false;
  let caracNumber = false;
  for (let i = 0; i < senha.length; i += 1) {
    let carac = senha[i];
    if (letraMaiuscula(carac)) {
      caracMaiusculo = true;
    } else if (letraMinuscula(carac)) {
      caracMinusculo = true;
    } else if (caracEspecial(carac)) {
      caracterEspecial = true;
    } else if (caracNumero(carac)) {
      caracNumber = true;
    }
  }
  
  return (caracMinusculo && !caracNumber && !caracterEspecial) ||
    (caracMaiusculo && !caracNumber && !caracterEspecial)
    ? "fraca"
    : caracMaiusculo && caracMinusculo && caracNumber && !caracterEspecial
    ? "media"
    : caracMaiusculo && caracMinusculo && caracNumber && caracterEspecial
    ? "forte"
    : "";
}

document.getElementById("submit").addEventListener("click", () => {
  const senha = document.getElementById("senha");
  const div = document.querySelector("div");
  const classificacaoDaSenha = verificaSenha(senha.value);
  console.log(classificacaoDaSenha);
  if (classificacaoDaSenha == "fraca") {
    div.style.setProperty("background-color", "red");
    div.textContent = "Senha fraca";
  } else if (classificacaoDaSenha == "media") {
    div.style.setProperty("background-color", "orange");
    div.textContent = "Senha mediana";
  } else if (classificacaoDaSenha == "forte") {
    div.style.setProperty("background-color", "green");
    div.textContent = "Senha forte";
  }
});
