function SelectColor() {
  const Body = document.body;
  const SectionColors = document.getElementById('Section-Colors');

  if (SectionColors.children.length === 0 ) {

    const divBlue = document.createElement('div');
    const divRed = document.createElement('div');
    const divRemove = document.createElement('div');

    const buttonBlue = document.createElement('button');
    const buttonRed = document.createElement('button');
    const buttonRemove = document.createElement('button');

    buttonBlue.textContent = 'azul';
    buttonRed.textContent = 'Vermelho';
    buttonRemove.textContent = 'Remove cor';

    buttonBlue.id = 'Blue';
    buttonRed.id = 'Red';
    buttonRemove.id = 'Remove';

    divBlue.appendChild(buttonBlue);
    divRed.appendChild(buttonRed);
    divRemove.appendChild(buttonRemove);

    SectionColors.append(divBlue,divRed,divRemove);

    buttonBlue.onclick = function() {
      Body.style.backgroundColor = 'blue';
    };
    buttonRed.onclick = function() {
      Body.style.backgroundColor = 'red';
    };
    buttonRemove.onclick = function() {
      Body.style.backgroundColor = '#fff';
    };
  }

  console.log(SectionColors)
}
