function adicionarCard() {
    const section = document.body.children.cards;
    const container = document.createElement("div");
    container.className = "container"; // adicionando uma classe
    const contentContainer = document.createElement("div");
    contentContainer.className = "content-container";
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    h1.textContent = "Lorem:";
    p.textContent = "Lorem ipsum dolor sit amet."
    //adicionando todos esse três elementos  a div contentContainer
    contentContainer.append(h1, hr, p);// como mostrado primeiro será adicionado o h1 depois h3 e depois o p
    //adicionando o contentontainer ao container principal
    container.appendChild(contentContainer);
    // adicionando o container na section
    section.appendChild(container);
}