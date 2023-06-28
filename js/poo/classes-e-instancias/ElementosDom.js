export class ElementosDom {
  constructor(seletor) {
    this.elementos = document.querySelectorAll(seletor);
  }
}
