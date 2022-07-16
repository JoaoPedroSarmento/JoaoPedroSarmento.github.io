let var1 = prompt("Digite um numero de 1 á 10");
let var2;
if (var1 < 10) {
  while (var1 < 10) {
    console.log(var1);
    var1++;
    if (var1 >= 10) {
      console.info("O numero digitado  agora equivale a 10\n");
    }
  }
}

if (var1 > 10) console.log(var1);
