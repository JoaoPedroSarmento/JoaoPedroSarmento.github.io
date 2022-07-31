function primeira_funcao(velocidade, aceleracao) {
  console.log("Velocidade atual : " + velocidade);
  for (let i = aceleracao; i < 1000; i += velocidade)
    console.log("A aceleração atual é de : " + i);
  if (velocidade > 1000) console.log("Velocidade maior que 1000");
}

let velocidade = prompt("Digite a velocidade\n");
let aceleracao = prompt("Digite a acereração da nave ");

primeira_funcao(velocidade, aceleracao);
