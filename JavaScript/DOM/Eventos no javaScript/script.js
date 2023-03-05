function Register(ev) {
  const SectionElement = ev.currentTarget.parentNode;
  const UserName = SectionElement.children.username.value;
  const PassWord = SectionElement.children.password.value;
  const PasswordConfirmation =
    SectionElement.children.passwordConfirmation.value;

  console.log({ UserName, PassWord, PasswordConfirmation });
}

const Button = document.getElementById("register-button");

Button.addEventListener("click", Register);

function RemoveEvent() {
  Button.removeEventListener("click", Register);
}
