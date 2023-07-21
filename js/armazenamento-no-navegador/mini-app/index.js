const formEntrar = document.getElementById("form-entrar");
const formCriarConta = document.getElementById("form-criar-conta");
document.getElementById("btn-entrar").addEventListener("click", function () {
    formCriarConta.style.display = "none";
    formEntrar.style.display = "initial";
})
document.getElementById("btn-criar-conta").addEventListener("click", function () {
    formEntrar.style.display = "none";
    formCriarConta.style.display = "initial";
})

function redirecionarParaDashboard() {
    window.location.href = "./dashboard.html";
}
function criarLocalStorage(nome, senha) {
    localStorage.setItem("nome", nome);
    localStorage.setItem("senha", senha);
    redirecionarParaDashboard();
}
function criarConta() {
    const inputNome = document.getElementById("criar-nome");
    const inputSenha = document.getElementById("criar-senha");
    if (inputNome.value && inputSenha.value) {
        criarLocalStorage(inputNome.value, inputSenha.value);
    } else {
        alert("Dados inválidos!");
    }
}
function entrar() {
    const inputNome = document.getElementById("nome-entrar");
    const inputSenha = document.getElementById("senha-entrar");
    const nomeAtual = localStorage.getItem("nome");
    const senhaAtual = localStorage.getItem("senha");
    if (inputNome.value == nomeAtual && inputSenha.value == senhaAtual) {
        redirecionarParaDashboard();
    } else {
        alert("Dados inválidos");
    }
}
document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (ev.currentTarget.id == "form-entrar") {
            entrar();
        } else {
            criarConta();
        }
    })
})