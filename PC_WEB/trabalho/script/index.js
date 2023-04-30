const btn01 = document.querySelector("#q01-executar");
const btn02 = document.querySelector("#q02-executar");
const btn03 = document.querySelector("#q03-executar");
const btn04 = document.querySelector("#q04-executar");
const btn05 = document.querySelector("#q05-executar");

/*****************************************
 * QUESTÃO 01
 */

/**
 * Função que retorna a quantidade de dinheiro digitada pelo usuário
 */
const getDinheiro = () => +document.querySelector("#q01-dinheiro").value || 0;

/**
 * Função que calcula a quantidade de combustivel comprada
 * @param dinheiro
 * @return litros
 * obs: cada litro custa 7 reais para o exemplo
 * o valor inicial é só para testes
 */
const calcLitrosCombustivel = (dinheiro) => {
  return (dinheiro / 7).toFixed(2); //mudar essa linha!
};

/**
 * função que retorna a quantidade de km que o carro conseguirá percorrer
 * @param litros - quantidade de litros comprados
 * @return km - de autonomia do carro
 */
const calcAutonomia = (litros) => {
  litros = getDinheiro() / 7;
  return (litros * 20).toFixed(2);
};

const respondeQuestao01 = (litros, autonomia) => {
  const listaResp = document.querySelector("#q01-result");
  const liResp = `<li>Você abastecerá ${litros}l</li>
                <li>Sua autonomia é de ${autonomia}km</li>`;
  listaResp.innerHTML = liResp;
};

btn01.addEventListener("click", () => {
  const dinheiro = getDinheiro();
  const litros = calcLitrosCombustivel(dinheiro);
  const autonomia = calcAutonomia(litros);

  respondeQuestao01(litros, autonomia);
});

/*****************************************
 * QUESTÃO 02
 */

/**
 * Função que retorna o PESO digitado pelo usuário
 */
const getPeso = () => +document.querySelector("#q02-peso").value || 0;

/**
 * Função que retorna a ALTURA digitada pelo usuário
 */
const getAltura = () => +document.getElementById("q02-altura").value || 0;

const calcIMC = (peso, altura) => {
  return peso / (altura * altura) || 0;
};

const getFaixa = (imc) => {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Levemente acima do peso";
  if (imc < 35) return "Obesidade grau I";
  if (imc < 40) return "Obesidade grau II (severa)";
  return "Obesidade grau III (mórbida)";
};

btn02.addEventListener("click", () => {
  const altura = getAltura();
  const peso = getPeso();
  let imc = calcIMC(peso, altura);
  console.log(imc);
  const ul = document.getElementById("q02-result");
  ul.innerHTML = `<li> Seu IMC é ${imc} </li> <li> Sua faixa de imc é ${getFaixa(
    imc
  )}`;
});

/*****************************************
 * QUESTÃO 03
 */

const lancadorDados = () => Math.ceil(Math.random() * 6);

btn03.addEventListener("click", () => {
  let lances = [0, 0, 0, 0, 0, 0]; //6 faces do dado
  const ocorrencia = document.querySelectorAll(".ocorrencia");
  const frequencia = document.querySelectorAll(".freq");
  for (let i = 0; i < 1000000; i++) {
    let lance = lancadorDados();
    lance == 1
      ? (lances[0] += 1)
      : lance == 2
      ? (lances[1] += 1)
      : lance == 3
      ? (lances[2] += 1)
      : lance == 4
      ? (lances[3] += 1)
      : lance == 5
      ? (lances[4] += 1)
      : (lances[5] += 1);
  }
  ocorrencia.forEach((td, i) => {
    console.log(td);
    td.innerText = lances[i];
  });
  frequencia.forEach((td, i) => {
    td.innerText = `${((lances[i] / 1000000) * 100).toFixed(2)}%`;
  });
});

/*****************************************
 * QUESTÃO 04
 */
const btnAddNome = document.querySelector("#q04-add");

//funcao que retorna o nome digitado
const getNome = () => document.querySelector("#q04-nome").value;

const insereNome = (nome) => {
  const listaNomes = document.querySelector("#q04-nomes");
  //inserir nomes em listaNomes
};

const inverteNome = (nome) => {
  let nomes = nome.split(" ");
  for (let i = 0; i < nomes.length; i += 1) {
    let nomeAtual = nomes[i].split("");
    for (let j = 0, k = nomeAtual.length - 1; j < k; j++, k--) {
      let aux = nomeAtual[j];
      nomeAtual[j] = nomeAtual[k];
      nomeAtual[k] = aux;
    }
    nomes[i] = nomeAtual.join("");
  }
  return nomes.join(" ");
};

// insere nome digitado
btnAddNome.addEventListener("click", () => {
  const listaNomes = document.querySelector("#q04-nomes");
  if (getNome()) listaNomes.innerHTML += `<li>${getNome()}</li>`;
});

btn04.addEventListener("click", () => {
  const liNomesDigitados = document.querySelectorAll("#q04-nomes li");
  const listaInvertido = document.querySelector("#q04-nomes-invertidos");

  //para cada li de liNomesDigitados, inverta e insira em listaInvertido
  for (let i = 0; i < liNomesDigitados.length; i++) {
    const nome = liNomesDigitados[i].textContent;
    const nomeInvertido = inverteNome(nome);
    listaInvertido.innerHTML += `<li>${nomeInvertido}</li>`;
  }
});

/*****************************************
 * QUESTÃO 05
 */
//funcao que retorna o nome digitado
const getPalavra = document.querySelector("#q05-palavra");

const input = document.getElementById("q05-palavra");
input.addEventListener("keypress", (ev) => {
  ev.preventDefault();
  input.value += ev.key != " " ? ev.key : "";
});
const verificaPalindromo = (palavra) => {
  palavra = palavra.toLowerCase();
  let palavraInvertida = palavra.split("");
  palavraInvertida = palavraInvertida.reverse();
  palavraInvertida = palavraInvertida.join("");
  console.log(palavra, palavraInvertida);
  return palavraInvertida === palavra;
};
btn05.addEventListener("click", () => {
  const palavra = getPalavra.value;
  const resp = document.querySelector("#q05-result");
  verificaPalindromo(palavra);
  if (palavra)
    resp.innerText = `A palavra ${palavra} 
        ${verificaPalindromo(palavra) ? "é" : "não é"} um palíndromo`;
});
