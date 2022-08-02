let paises = {
  Brasil: "Brasil",
  Espanha: "Espanha",
  Argentina: "Argentina",
  true: false,
  4: "Alemanhã",
};

console.log(paises.Brasil); //Mostrando a prpriedade Brasil no console
console.log(paises.Espanha);
console.log(paises.Argentina);
console.log(paises.true);
console.log(paises["4"]); // Apena desta forma conseguimos mostrar uma propriedade que começa com número

paises.Guatemala = "Guatemala"; // Adicionando um object

console.log(paises.Guatemala);

let america = {
  "Países do Sul": " Brasil  ," + " Argentina", // para locarlizarmos essa propriedade necessitamos fazer igualmenete o que fazemos quando uma propriedade começa com um número
};

console.log(america["Países do Sul"]); // Agora irá aparecer na tela essa propriedade que apresenta espaço
