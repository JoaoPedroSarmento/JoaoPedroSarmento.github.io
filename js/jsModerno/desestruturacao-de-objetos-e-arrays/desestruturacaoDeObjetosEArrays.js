const pessoa = {
  nome: "Luke",
  trabalho: "Programador",
  nacionalidade: "Brasileiro",
  parentes: ["Ryan", "Maria"],
};

// desetruturando array e objetos
/* 
A desestruturação permite criar variáveis com propriedades de um objeto.
Às variáveis serão criadas com os mesmos nomes que as propriedades.  
*/
//desestruturação com obejto
const { nome, parentes } = pessoa;

console.log(nome, parentes);

//desestruturação com array
//A variável ryan irá possuir o valor da posição 0 do array parentes.
// A variável maria irá possuir o valor da posição 1 do array parentes.
[ryan, maria] = parentes;
console.log(ryan, maria);

function retornaNome({ nome }) {
  return nome;
}

const pessoaNome = retornaNome(pessoa);
console.log(pessoaNome);
