class Livro {
  constructor(titulo, paginas, emEstoque, tags, autor) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.emEstoque = emEstoque;
    this.tags = tags;
    this.autor = autor;
  }
  adicionaEstoque(quantidade) {
    this.emEstoque += quantidade;
  }
}
const eragon = new Livro(
  "Eragon",
  400,
  30,
  ["Fantasia", "Medieval"],
  "Christopher Paolini"
);
console.log(eragon.emEstoque);
eragon.adicionaEstoque(50);
console.log(eragon.emEstoque);

console.log(eragon instanceof Livro);
console.log(eragon instanceof Object);
console.log(eragon instanceof Array);
