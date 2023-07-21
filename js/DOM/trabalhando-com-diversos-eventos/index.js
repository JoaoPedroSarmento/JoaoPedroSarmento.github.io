const input = document.getElementById("input");
function apenasLetras(ev) {
    ev.preventDefault();
    const valor = ev.key.toLowerCase();
    if (valor >= "a" && valor <= "z") {
        input.value += ev.key;
    }
}
input.addEventListener("keypress", apenasLetras);

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (ev) {
    const nomeUsuario = document.getElementById("user-name").value;
    const senha = document.getElementById("password").value
    ev.preventDefault()
    if (nomeUsuario && senha) {
        loginForm.reset();
        console.log({ nomeUsuario, senha })
    } else {
        alert("Dados inválidos!");
    }
})

document.getElementById("input-focus").addEventListener("focus", function (ev) {
    console.log("ganhou foco");
})
document.getElementById("input-blur").addEventListener("blur", function (ev) {
    console.log("perdeu foco");
})