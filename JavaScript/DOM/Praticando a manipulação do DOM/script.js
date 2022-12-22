function addContact() {
  const contacSection = document.getElementById("contacts-list");

  const h3 = document.createElement("h3");

  h3.innerText = "Contato";

  const ul = document.createElement("ul");
  const nameLi = document.createElement("li");

  nameLi.innerText = "Nome : ";

  const nameinput = document.createElement("input");

  nameinput.type = "text";

  nameinput.name = "Fullname";

  nameLi.appendChild(nameinput);

  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  const phoneli = document.createElement("li");

  phoneli.innerText = "Telefone : ";

  phoneinput = document.createElement("input");

  phoneinput.type = "text";

  phoneinput.name = "Fullname";

  phoneli.appendChild(phoneinput);

  ul.appendChild(phoneli);
  ul.appendChild(document.createElement("br"));

  const adressli = document.createElement("li");

  adressli.innerHTML = '<label for ="adress"> Endereço </label>';

  const adressinput = document.createElement("input");

  adressinput.type = "text";

  adressinput.name = "adress";
  adressinput.id = "adress";

  adressli.appendChild(adressinput);

  ul.appendChild(adressli);
  ul.appendChild(document.createElement("br"));

  contacSection.append(h3, ul);
}

function removeContact ()
{
    const contacSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName ('ul')
    
    contacSection.removeChild(titles[0] ) // Forma de excluir o primeiro contato da lista 
    contacSection.removeChild(contacts[0] )

}