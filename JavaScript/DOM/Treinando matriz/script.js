function EnviarDados() {
  let qtd = document.getElementById("qtd").value;

  const mat = document.getElementById("mat").value;

  const name = document.getElementById("name").value;

  let Dados;

  const Notas = document.getElementById("notas");
  console.log(Notas);

  let i = 1;
  for (i; i <= qtd; i = i + 1) {
    const InputNotas = document.createElement("input");
    InputNotas.type = "text";
    if (qtd <= 3) {
      InputNotas.placeholder = "Nota do " + i + " trimestre";
    } else {
      InputNotas.placeholder = "Nota do " + i + " bimestre";
    }
    
    
   
    const QuebraLinha = document.createElement("br");

    const QuebraLinha2 = document.createElement("br");

    Notas.append(InputNotas, QuebraLinha, QuebraLinha2);

    
  }

  j = 1;
  for (j; j <= qtd; j++) {
    const info = document.getElementById("informacoes");
    const p = document.createElement("p");
    if (qtd <= 3) {
    p.innerText ="Matéria " + mat + " . " + "Nota do " + i +  "trimestre" + Dados[i];  
  }
  else {
    p.innerText ="Matéria " + mat + " . " + "Nota do " + i +  "trimestre" + Dados[i];  
  }
  

  info.appendChild(p);


}
}
