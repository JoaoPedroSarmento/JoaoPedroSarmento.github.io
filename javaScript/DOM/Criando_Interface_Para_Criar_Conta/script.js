function Creatcont() {
  const conta = document.getElementById("conta");
  conta.style.display = "flex";

  const button = document.getElementById("button1");

  button.style.display = "none";

  const ContactSection = document.createElement("section");
  ContactSection.id = "Inputs";

  const form = document.getElementById("conta");

  const DivEmail = document.createElement("div");
  DivEmail.id = "input-email";

  const DivPassword = document.createElement("div");
  DivPassword.id = "input-password";

  const Divbutton = document.createElement("div");
  Divbutton.id = "input-button";

  const InputEmail = document.createElement("input");
  InputEmail.type = "email";
  InputEmail.placeholder = "Escreva o seu email";
  InputEmail.id = "input-1";    
  InputEmail.required;
  DivEmail.appendChild(InputEmail);

  const InputPassword = document.createElement("input");
  InputPassword.type = "password";
  InputPassword.placeholder = "Crie a sua senha ...";
  InputPassword.id = "input-1";
  InputPassword.minLength = "5";
  InputPassword.required;
  DivPassword.appendChild(InputPassword);

  const InputButton = document.createElement("input");
  InputButton.type = "submit";
  InputButton.value = "Criar conta";
  InputButton.id = "input-2";
  InputButton.required;
  Divbutton.appendChild(InputButton);

  ContactSection.append(DivEmail, DivPassword, Divbutton);
  form.appendChild(ContactSection);
}

function Close()
{
    const conta = document.getElementById("conta");
    conta.style.display = "none";
    const button = document.getElementById("button1");

    button.style.display = "flex";
}