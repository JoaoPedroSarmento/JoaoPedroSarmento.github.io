// const livro = {
//   titulo: "Eragon",
//   paginas: 468,
//   publicado: true,
//   emEstoque: 20,
//   tags: ["Fantasia", "Medieval"],
//   autor: {
//     nome: "Christopher Paolini",
//   },
//   adicionarEstoque(quantidade) {
//     this.emEstoque += quantidade;
//   },
// };

// livro.adicionarEstoque(30);

// console.log(livro.emEstoque);

// funções Construtoras

function Livro(titulo, paginas, emEstoque, tags, autor) {
  this.titulo = titulo;
  this.paginas = paginas;
  this.emEstoque = emEstoque;
  this.tags = tags;
  this.autor = autor;
}

const livro1 = new Livro(
  "O poder do agora",
  400,
  50,
  ["Iluminacao", "proposito", "mente"],
  "Eckhart Tolle"
);

console.log(livro1);
