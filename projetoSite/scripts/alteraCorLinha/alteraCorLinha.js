function mudaCorDaLinha() {
  const divContainerSlide = document.querySelector(".slide-container");
  divContainerSlide.addEventListener("mouseover", () => {
    console.log("Moveu");
    adicionaClasseHoverAElementosComHoverAtivo();
  });
  document.getElementById("planos").addEventListener("mouseout", () => {
    retiraClasseHover();
  });
}

function adicionaClasseHoverAElementosComHoverAtivo() {
  const containerContent = document.querySelectorAll(
    ".container-content-1:hover"
  );
  console.log(containerContent);
  containerContent.forEach((elem) => {
    elem.classList.add("hover");
  });
}

function retiraClasseHover() {
  const sectionPlanos = document.querySelector("#planos:hover") || false;
  console.log(sectionPlanos);
  if (!sectionPlanos) {
    const containerContentHover = document.querySelectorAll(".hover");
    containerContentHover.forEach((elem) => {
      elem.classList.remove("hover");
    });
  }
}
mudaCorDaLinha();
