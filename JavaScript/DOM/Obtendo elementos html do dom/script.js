function show() {
  const contactlist = document.getElementById("contact-list");
  console.log(contactlist);
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactinputs = document.getElementsByClassName("contact-input");
  console.log(contactinputs);

  const contact = document.querySelectorAll("#contact-list > li > label");
  console.log(contact);

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1);

  const firstcontact = document.querySelector('#contact-list > li > label')
console.log(firstcontact);
}
