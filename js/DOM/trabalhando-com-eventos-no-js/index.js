function registrar(ev) {
    const section = ev.currentTarget.parentNode;
    const userName = section.children.username.value;
    const password = section.children.password.value;
    const passwordConfirmation = section.children.passwordConfirmation.value;
    console.log({ userName, password, passwordConfirmation });
}

const btn = document.getElementById("register-button");

btn.addEventListener("click", registrar);
function removerEvento() {
    btn.removeEventListener("click", registrar);
}


