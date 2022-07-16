let nome = prompt("Qual seu nome, piloto ? \n\n");

let velocidade = 0;

let nave = prompt("A que velocidade você gostaria de acelerar  ?\n");

confirm("velocidade " + nave + " km/s" + "  confirmar  ?");

if (nave == velocidade) {
  alert("A nave esta parada ");
}

if (nave < 40) {
  alert("Você está devagar,podemos aumentar mais  ");
}

if (nave >= 40 && nave < 80) {
  alert("Parece  uma boa velocidade para  manter  ");
}
if (nave >= 80 && nave < 100) {
  alert("Velocidade alta considere diminuir ");
}
if (nave >= 100) {
  alert("Velocidade perigosa.Controle automático forçado ");
}

alert(
  "Seu nome é : " + nome + "  sua  velocidade atual é de : " + nave + " km/s"
);
