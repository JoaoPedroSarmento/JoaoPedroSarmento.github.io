// Abaixo criando um object com um  array
let pais = {
  Eua: "Estados Unidos da América ",
  MaioresCidades: [
    "Los Agenles,Califórnia",
    "Houstoun, texas ",
    "San Diego, Califórnia",
  ], // Propiredade MaioresCidades com um Arrays
};
console.log(pais);

pais.MaioresCidades.unshift("Phoenix, Arizona");
console.log(pais);
pais.MaioresCidades.shift();
console.log(pais);
pais.MaioresCidades.push("Filadélfia, Pensilvânia");
console.log(pais);
pais.MaioresCidades.pop();
console.log(pais);

// Aqui abaixo estamos criando um array com objects
let paises = [{ name: "Brasil" }, { name: "Argentina" }, { name: "uruguai" }];

console.log(paises[0].name); // // Irá imprimir o que está na posição 0 mas dentro da propriedade name
console.log(paises[0]); // Irá imprimir apenas o que está na posição 0
console.log(paises[1]); // Irá imprimir apenas o que está na posição 1
console.log(paises[1].name); // Irá imprimir o que está na posição 1 mas dentro da propriedade name
console.log(paises[2]); // irá imprimir apenas o que está na posição 2 as propriedades, e os elementos dentro dela
console.log(paises[2].name); // Irá imprimir apenas o elemento da name que está na posição 2 desse array

paises.forEach((paises2) => {
  console.log("O nome do país é " + paises2.name);
});
