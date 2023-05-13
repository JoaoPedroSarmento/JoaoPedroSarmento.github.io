function mediaFinal(nota1, nota2, nota3) {
    return ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10;
  }
  
  

  document.getElementById("calcMediaFinal").addEventListener("click" , () => {
    const preMediaFinal = document.getElementById("displayMediaFinal");
    const nota1 = document.getElementById("nota1");
    const nota2 = document.getElementById("nota2");
    const nota3 = document.getElementById("nota3");
    preMediaFinal.textContent = `Média final: ${mediaFinal(Number(nota1.value),Number(nota2.value), Number(nota3.value))}`;
  })  