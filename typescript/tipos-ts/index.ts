// number
let a: number = 2;
let b: number = 3;
let soma: number = a + b;
console.log(soma);

//string 

let str: string = "1234";
//str = 1234 // erro
console.log(str);

let boolean = true || false;


// array 
let array1: number[] = [1, 2, 3, 4, 5];
let array2: Array<number> = [1, 2, 3, 4, 5,];

// objetos
const pessoa = {
    nome: function (nome: string): string {
        return nome;
    },
    idade: function calculaIdade(dia: number, mes: number, ano: number): number {
        const dataNascimento = new Date(ano, mes - 1, dia); // Note que o mês é baseado em zero (janeiro é 0, fevereiro é 1, etc.)

        const dataAtual = new Date();
        const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        const mesAniversario = dataNascimento.getMonth();
        const diaAniversario = dataNascimento.getDate();
        const mesAtual = dataAtual.getMonth();
        const diaAtual = dataAtual.getDate();

        if (mesAtual < mesAniversario || (mesAtual === mesAniversario && diaAtual < diaAniversario)) {

            return idade - 1;
        } else {
            return idade;
        }
    }
}
console.log(pessoa.nome("João Sarmento"));
console.log(pessoa.idade(23, 11, 2005));