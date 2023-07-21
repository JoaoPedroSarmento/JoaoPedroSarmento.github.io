const saldo = document.getElementById("saldo");
const input = document.getElementById("input");
function adicionarApenasNumeros(ev) {
    ev.preventDefault();
    if (!isNaN(+ev.key) && ev.key != " ") {
        input.value += ev.key;
    } else if (ev.key === "." && input.value && !input.value.includes(ev.key)) {
        input.value += ev.key;
    }
}
function isPossivelAdicionarSaldo() {
    return input.value && input.value > 0;
}
function isPossivelRemoverSaldo() {
    return (isPossivelAdicionarSaldo() && !(+input.value > +saldo.textContent))
}
function adicionarSaldo() {
    if (isPossivelAdicionarSaldo()) {
        const novoSaldo = +saldo.textContent + +input.value;
        saldo.textContent = novoSaldo;
        adicionarTransacao("dinheiro-adicionado");
    }
}
function removerSaldo() {
    if (isPossivelRemoverSaldo()) {
        const novoSaldo = +saldo.textContent - +input.value;
        saldo.textContent = novoSaldo;
        adicionarTransacao("dinheiro-removido");
    }
}
function adicionarTransacao(tipoTransacao) {
    const ul = document.querySelector(".transacoes-lista");
    const li = document.createElement("li");

    if (tipoTransacao == "dinheiro-adicionado") {
        li.className = tipoTransacao;
        li.textContent = input.value;
    } else {
        li.className = tipoTransacao;
        li.textContent = input.value;
    }
    ul.appendChild(li);
}

input.addEventListener("keypress", adicionarApenasNumeros);
document.getElementById("add-saldo").addEventListener("click", adicionarSaldo);
document.getElementById("remover-saldo").addEventListener("click", removerSaldo);