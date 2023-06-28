const usuario = {
  nome: "Dean Winchester",
  trabalho: "Caçador",
};
console.log(usuario?.name);
console.log(usuario?.trabalho);
console.log(usuario.trabalho?.trabalhoNome);
