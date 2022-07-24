function primeira_funcao(velocidade, aceleracao) {
  console.log("Velocidade atual : " + velocidade);

  do {
    let newvelocidade = velocidade + aceleracao;
    console.log("A velocidade atual é de " + newvelocidade + " km/s");
    velocidade = velocidade + aceleracao;
  } while (velocidade < 100);
}

let v = 0;
let a = 10;

primeira_funcao(v, a);
