const test = 5;
let literal: 5;

// let option: "Yes" | "No" | "maybe";

let option: number | boolean;
option = 2;
option = true;
// option = "String" erro

// criando nosso tipo

type Jogos = "Subway Surf" | "Free fire" | "FIFA"

function defineJogo(jogo: Jogos): Jogos {
    return jogo;
}

let jogo: Jogos;
jogo = defineJogo("Free fire");
console.log(jogo);