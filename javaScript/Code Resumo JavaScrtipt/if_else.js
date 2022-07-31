let velocidade = prompt("Digite a velocidade da nave ");
if (velocidade < 100) {
  // Se velocidade é menor que 100 irá executar
  console.log("AUMENTE A VELOCIDADE");
} // Caso contrário se não executar a de cima executa essa, se velocidade é maior que 100 e menor que 400
else if (velocidade > 100 && velocidade < 400) {
  // && é como se fosse o e, só é verdade se tudo for verdade
  console.log("Velocidade estável\n");
} // Caso contrário se nenhum executar, executa isso :
else {
  console.warn("Diminua a velocidade ");
}
