function Register(element) {
  const UserName = element.children.username.value;
  const PassWord = element.children.password.value;
  const PasswordConfirmation = element.children.passwordConfirmation.value;

  console.log(UserName, PassWord, PasswordConfirmation);
}
