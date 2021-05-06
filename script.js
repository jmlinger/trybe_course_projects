// adiciona cores à paleta.
const color = document.getElementsByClassName('color');
let arrayColor = ['black', 'red', 'yellow', 'purple'];
for (let index = 0; index < 4; index += 1) {
  color[index].style.backgroundColor = arrayColor[index];
}

// cria tabela pixel board.
const pixelBoard = document.getElementById('pixel-board');
const createTable = document.createElement('table');
for (let i = 0; i < 5; i += 1) {
  const createRow = createTable.insertRow(0);
  for (let j = 0; j < 5; j += 1) {
    createRow.insertCell(j);
  }
}
pixelBoard.appendChild(createTable);

// configura a tabela da pixel board.
const cell = document.getElementsByTagName('td');
for (let i = 0; i < cell.length; i += 1) {
  cell[i].style.width = 40 + 'px';
  cell[i].style.height = 40 + 'px';
  cell[i].style.border = 1 + 'px' + ' ' + 'solid' + ' ' + 'black';
  cell[i].style.backgroundColor = 'white';
  cell[i].classList.add('pixel');
}

// adiciona e remove classe selected nas paletcolors quando clicadas. Referência: ADRIANA BIBERG.
color[0].classList.add('selected');
function selectColor(selecionado) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  selecionado.target.classList.add('selected');
}
for (let indexSelect = 0; indexSelect < color.length; indexSelect += 1) {
  color[indexSelect].addEventListener('click', selectColor);
}


// adiciona cor aos pixels.
const pixel = document.querySelectorAll('.pixel');
function printColor(selecionado) {
  const selected = document.querySelector('.selected');
  selecionado.target.style.backgroundColor = selected.style.backgroundColor;
}
for (let indexPixels = 0; indexPixels < pixel.length; indexPixels += 1) {
  pixel[indexPixels].addEventListener('click', printColor);
}


// configura botão.
const button = document.querySelector('#clear-board');
button.addEventListener('click', function() {
  for (let indexPixels = 0; indexPixels < pixel.length; indexPixels += 1) {
    pixel[indexPixels].style.backgroundColor = 'white';
  }
})
