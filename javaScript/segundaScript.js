alert("Iremos pedir alguns dados a seguir\n\n\n");
let old = prompt("Digite o nome  da pessoa mais velha\n");
let old2 = prompt("Digite a idade da pessoa mais velha\n");
let new1 = prompt("Digite o nome  da pessoa mais nova\n");
let new2 = prompt("Digite a idade da pessoa mais nova\n");
let idade = old2 - new2;
if (new2 == old2 || old2 == new2) {
  alert("A idade e a mesma");
}

alert(
  "O nome da pessoa mais velha e : " +
    old +
    "\n e  sua idade é : " +
    old2 +
    "\nO nome da pessoa mais nova e : " +
    new1 +
    " \ne  sua idade é : " +
    new2
);

if (new2 != old2 || old2 != new2) {
  alert(
    "O nome da pessoa mais velha e : " +
      old +
      "\n e  sua idade é : " +
      old2 +
      "\nO nome da pessoa mais nova e : " +
      new1 +
      " \ne  sua idade é : " +
      new2 +
      "\nA diferença de idade é de  : " +
      idade +
      "ano[s]"
  );
}
