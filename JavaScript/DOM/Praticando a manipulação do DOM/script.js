function AddContact () {
  const PuloDeLinha1 = document.createElement(`br`)
  const PuloDeLinha2 = document.createElement(`br`)
  const ContactSection = document.getElementById(`contacts-list`)
  const h3 = document.createElement(`h3`);
  h3.innerText = `Contato`;

  const ul = document.createElement(`ul`);
  const nameLi = document.createElement(`li`);
  nameLi.innerText = `Nome : `;
  const NameInput = document.createElement(`input`)
  NameInput.type = `text`;
  NameInput.name = `FullName`;
  nameLi.appendChild(NameInput)  

  const PhoneLi = document.createElement(`li`);
  PhoneLi.innerText = `Telefone : `;
  const PhoneInput = document.createElement(`input`)
  PhoneInput.type = `text`;
  PhoneInput.name = `Telefone`;
  PhoneLi.appendChild(PhoneInput);

  const AdressLi = document.createElement(`li`)
  AdressLi.innerHTML = `<label for="adress"> Endereço :  </label>`;
  const AdressInput = document.createElement(`input`)
  AdressInput.type = `text`;
  AdressInput.id = `adress`;
  AdressLi.appendChild(AdressInput)
  ul.append(nameLi,PuloDeLinha1,PhoneLi,PuloDeLinha2,AdressLi)
  ContactSection.append(h3,ul)
  return true;
}
 
function RemoveContact() {
 const ContactSection = document.getElementById(`contacts-list`); 
 const titles = document.getElementsByTagName(`h3`);
 const  contacts = document.getElementsByTagName(`ul`);
 ContactSection.removeChild(titles[titles.length -1]);
 ContactSection.removeChild(contacts[contacts.length -1]);  
}
