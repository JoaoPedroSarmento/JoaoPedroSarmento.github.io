const pessoa = {
    nome: "Hean",
    idade: 18,
    habilidades: ["php", "python", "ruby", "Pascal"],
    // método 
    saudacao() {
        console.log("Me chamo " + this.nome + " e tenho " + this.idade + " anos");
    },
    mostrarHablidades: function habilidade() {
        console.log("Minhas habilidades: " + this.habilidades);
    }
}

console.log(pessoa.habilidades);
pessoa.saudacao();
pessoa.mostrarHablidades();
