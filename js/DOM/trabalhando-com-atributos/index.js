const input = document.getElementById("input");
let inputValue = input.getAttribute("value");
console.log(inputValue);
input.setAttribute("value", "Valor do input"); // Atribuindo um novo valor 
inputValue = input.getAttribute("value"); // Pegando o novo valor
console.log(inputValue);

const atributos = input.attributes; // Pegando todos os atributos
console.log(atributos.id.value); // Mostrando o valor do ID
console.log(atributos.type); // Mostrando o tipo do Input
console.log(atributos.value); // Mostrando o atributo value
console.log(atributos.length); // mostrando a quantidade de atributos
console.log(atributos.getNamedItem("value"))// mostrando o atributo value
console.log(atributos.item(0)); // pega o atributo na posição 0
// atributos.removeNamedItem("value") caso seja executado irá remover o atributo value
// criando atributos 

const nameAtributo = document.createAttribute("name");
nameAtributo.value = "atributo-name";
//adicionando  o atributo criado ao elemento
atributos.setNamedItem(nameAtributo);

// forma mais fácil de definir/criar atributos em um elemento 
input.setAttribute("class", "classe-criada");
// removendo um atributo
input.removeAttribute("id");