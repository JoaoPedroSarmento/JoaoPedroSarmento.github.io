const ElementsP = document.getElementsByTagName("p");

console.log(ElementsP);

for (let i = 0; i < ElementsP.length; i += 1) {
  console.log(ElementsP[i].innerText);
}

const ClassP = document.getElementsByClassName("paragraph");

console.log("Pegando Classe do elemento p ");

for (const Valor of ClassP) {
  console.log(Valor.innerText);
}

const ListItens = document.getElementsByClassName("item");

console.log(ListItens[0].innerText);
console.log(ListItens[4].innerText);
console.log(ListItens.length);

const Inputs = document.getElementsByTagName("input");

console.log(Inputs);

console.log(Inputs[1].type);

console.log(Inputs[1].innerText);

const RadioName = document.getElementsByName("grupo");

console.log(RadioName);
