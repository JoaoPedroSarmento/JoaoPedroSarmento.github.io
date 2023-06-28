function soma(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    // throw lança erro
    throw new Error("Os argumento devem ser dois números");
  }

  return num1 + num2;
}
//tentar executar um determinado código
try {
  console.log(soma(2, 9));
  console.log(soma(true, 14));
  console.log(soma(undefined, 22));
  console.log(soma(18, "0"));
  console.log(soma(39, null));
  console.log(soma(13, "zero"));
} catch (erro) {
  console.log("Um erro ocorreu");
  console.log(erro.message);
} finally {
  console.log("Cálculos terminados");
}
