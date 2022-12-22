function Register(ev) {
  console.log(ev);

  const sectionElement = ev.currentTarget.parentNode

  const username = sectionElement.children.username.value
  
  const password = sectionElement.children.password.value;

  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

  if (password == passwordConfirmation) {
    alert("usuário " + username + " registrado ");
  } else {
    alert("Usuário não registrado!");
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", Register);

function removeEvent()
{
    button.removeEventListener('click' , Register)
    alert("Evento removido !")
}

button.addEventListener('mouseover' , function (ev){
    console.log(ev.currentTarget)
})