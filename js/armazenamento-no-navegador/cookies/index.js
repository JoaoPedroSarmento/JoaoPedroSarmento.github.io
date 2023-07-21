function criarCookie() {
    const input = document.getElementById("input-text");
    const data = "Sun, 20 Jul 2024 23: 59: 59 GMT";
    document.cookie = "informacao=" + input.value + ";" + "expires=" + data + ";" + "path=/";
}

function lerCookier() {
    const cookie = document.cookie.split(";");
    for (const valor of cookie) {
        console.log(valor);
    }
}

document.getElementById("guardar-cookie").addEventListener("click", criarCookie);
document.getElementById("ler-cookie").addEventListener("click", lerCookier);