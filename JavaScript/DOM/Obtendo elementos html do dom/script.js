const List = document.getElementsByTagName(`li`);
console.log(List);

for (let i = 0; i < List.length; i += 1) {
  console.log(List[i]);
}
console.log(List.item1, List.item2, List);

const Paragrafos = document.getElementsByClassName(`paragrafo`);
console.log(Paragrafos);
for (let i = 0; i < Paragrafos.length; i += 1) {
  console.log(Paragrafos[i]);
}
console.log(
  Paragrafos.paragrafo1,
  Paragrafos.paragrafo2,
  Paragrafos.paragrafo3
);

const ListName = document.getElementsByName(`List-Name`);

console.log(ListName);
ListName.forEach(function (valor, indice) {
  console.log(valor, indice);
});

const Texts = document.querySelectorAll(`div p `);

console.log(Texts);
Texts.forEach(function (valor, indice) {
  console.log(valor, indice);
});

const DivContainer = document.getElementById(`container`);
console.log(DivContainer);

const ListaOrdenada = document.querySelector(`ol > li`);

console.log(ListaOrdenada);
