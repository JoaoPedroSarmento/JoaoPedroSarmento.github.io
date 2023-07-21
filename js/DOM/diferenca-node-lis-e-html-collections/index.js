// const container = document.getElementById("container");
// const paragraphs1 = container.getElementsByTagName("p"); // Retorna um HTMLCollection
// const paragraphs2 = container.querySelectorAll("p"); // Retorna um NodeList

// console.log(paragraphs1.length); // 3
// console.log(paragraphs2.length); // 3

// // Adiciona um novo parágrafo ao div
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "Novo parágrafo";
// container.appendChild(newParagraph);

// console.log(paragraphs1.length); // 4 (atualizado automaticamente)
// console.log(paragraphs2.length); // 3 (não atualizado automaticamente)
const container = document.getElementById("container");
const paragraphs1 = container.getElementsByTagName("p"); // Retorna um HTMLCollection
const paragraphs2 = container.querySelectorAll("p"); // Retorna um NodeList

console.log(paragraphs1.length); // 3
console.log(paragraphs2.length); // 3

// Remove o primeiro parágrafo do div
container.removeChild(paragraphs1[0]);

console.log(paragraphs1.length); // 2 (atualizado automaticamente)
console.log(paragraphs2.length); // 3 (não atualizado automaticamente)

