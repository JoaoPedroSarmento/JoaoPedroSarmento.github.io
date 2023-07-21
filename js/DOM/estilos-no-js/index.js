// // Trabalhando com estilos no JavaScript:

// // A manipulação de estilos em JavaScript é uma técnica usada para alterar as propriedades de estilo de um elemento HTML por meio do código JavaScript.A manipulação de estilos é uma maneira poderosa de criar efeitos visuais dinâmicos em uma página da web, como animações, transições, alterações de cor e fonte, entre outros.
// // Maneiras de manipular estilos no JavaScript:

// // Propriedade style do elemento: você pode usar a propriedade style do elemento para acessar e modificar diretamente as propriedades de estilo do elemento.Por exemplo:
// const container = document.getElementById('container');

// container.style.backgroundColor = 'red';
// container.style.fontSize = '20px';

function temaDark() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}
function temaLight() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}
function alternaTemas() {
    document.body.classList.toggle("dark" || "light");
}
document.getElementById("dark").addEventListener("click", temaDark);
document.getElementById("light").addEventListener("click", temaLight);
document.getElementById("toggle").addEventListener("click", alternaTemas);