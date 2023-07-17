const list = document.getElementsByTagName("li");
console.log(list)
for (let i = 0; i < list.length; i += 1) {
    console.log(list[i]);
}
console.log(list.item1, list.item2, list.item3, list);

const paragrafos = document.getElementsByClassName("paragrafo")
console.log(paragrafos)
for (let i = 0; i < paragrafos.length; i += 1) {
    console.log(paragrafos[i]);
}
console.log(paragrafos.paragrafo1, paragrafos.paragrafo2, paragrafos.paragrafo3)

const nodeList1 = document.getElementsByName("list-name")

console.log(nodeList1)
nodeList1.forEach(function (valor, indice) {
    console.log(valor, indice)
})

const nodeList2 = document.querySelectorAll(".list")

console.log(nodeList2);
nodeList2.forEach(function (valor, indice) {
    console.log(valor, indice)
}) 