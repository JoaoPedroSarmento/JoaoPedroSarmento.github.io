let controle = 1;
while (controle <= 10) {
    console.log(controle);
    controle++;
}

controle = 0;
do {
    console.log(controle);
} while (controle != 0);

for (let i = 1; i <= 10; i += 1) {
    console.log(i);
}


let anterior = 0;
let proximo = 1;
let atual = 1;

for (let i = 0; i < num; i += 1) {
    console.log(atual);
    proximo += anterior;
    anterior = atual;
    atual = proximo;
}

for (let i = 10; i <= 1; i = i - 1) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        break;
    }
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

const num = +window.prompt("Insira um número");
let proximoPrimo = (num < 2) ? 2 : num + 1;
for (let i = 2; i < proximoPrimo; i += 1) {
    if (proximoPrimo % i == 0) {
        proximoPrimo += 1;
    }
}
console.log("Proximo primo " + proximoPrimo)