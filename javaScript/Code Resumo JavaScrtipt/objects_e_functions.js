let pais = {
  name: "Estados Unidos", // Como essas propriedades não são funções chamomos elas de atributo
  type: " Desenvolvido",
  informações: function () {
    // Como a propriedade informações é uma função, então chamos ela de método
    console.log(" País " + this.name + ", Desenvolvimento : " + this.type); // Ao invés de colocarmos o nome da variável que guarda os objects usamos this.propriedade
  },
};
console.log(pais.informações());

console.log(pais);

pais.estados = " Possui 50 estados ";
console.log(pais);

pais.informações2 = function () {
  console.log(
    " País " +
      pais.name +
      ", Desenvolvimento : " +
      pais.type +
      " possui : " +
      pais.estados
  );
  return "";
};

console.log(pais.informações2());
