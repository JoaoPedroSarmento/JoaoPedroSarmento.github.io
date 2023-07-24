// number
var a = 2;
var b = 3;
var soma = a + b;
console.log(soma);
//string 
var str = "1234";
//str = 1234 // erro
console.log(str);
var boolean = true || false;
// array 
var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 2, 3, 4, 5,];
// objetos
var pessoa = {
    nome: function (nome) {
        return nome;
    },
    idade: function calculaIdade(dia, mes, ano) {
        var dataNascimento = new Date(ano, mes - 1, dia); // Note que o mês é baseado em zero (janeiro é 0, fevereiro é 1, etc.)
        var dataAtual = new Date();
        var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        var mesAniversario = dataNascimento.getMonth();
        var diaAniversario = dataNascimento.getDate();
        var mesAtual = dataAtual.getMonth();
        var diaAtual = dataAtual.getDate();
        if (mesAtual < mesAniversario || (mesAtual === mesAniversario && diaAtual < diaAniversario)) {
            return idade - 1;
        }
        else {
            return idade;
        }
    }
};
console.log(pessoa.nome("João Sarmento"));
console.log(pessoa.idade(23, 11, 2005));
