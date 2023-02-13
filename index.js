function Projects() {
    const SectionProject = document.getElementById(`projects`);
    const Container2 = document.getElementById(`container-02`);
    const Close = document.getElementById(`close`);
    const BoxItens = document.createElement(`div`);
    
    Container2.style.display = `none`;
    SectionProject.style.display = `block`;
    Close.style.display = `block`;
    
    BoxItens.className = `Box-Itens`;
    BoxItens.innerHTML = `
    <div class = "box box1">
    <div class="diagonal-plate">
        <p>Sem Projetos</p>
      </div> 
    </div>

    </div>
    <div class = "box box2">
     <div class="diagonal-plate">
        <p>Sem Projetos</p>
      </div>  
    </div>  
    <div class = "box box3">
     <div class="diagonal-plate">
        <p>Sem Projetos</p>
      </div>  
    </div>`

    SectionProject.appendChild(BoxItens);
    SectionProject.style.animation = `fadeIn   0.8s ease-in-out forwards`;   
}

function Close() {
    const SectionProject = document.getElementById(`projects`);
    const Container2 = document.getElementById(`container-02`);
    const Close = document.getElementById(`close`);

    const boxes = document.querySelectorAll(`.box`);
    boxes.forEach(box => box.remove());

    Container2.style.display = `flex`;
    SectionProject.style.display = `none`;
    Container2.style.animation = `fadeIn   0.8s ease-in-out forwards`;
    Close.style.display = `none`;
}
