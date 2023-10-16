class ElementoHTML {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    adicionarClasse(classe) {
        this.elemento.classList.add(classe);
    }
    removerClasse(classe) {
        this.elemento.classList.remove(classe);
    }
    adicionarDisplay(display) {
        this.elemento.style.display = "display" + display;
    }
}

export default ElementoHTML;