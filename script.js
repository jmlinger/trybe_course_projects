const createInput = document.createElement('input');
const createButton = document.createElement('button');
const createTable = document.createElement('table');
const secaoBotoes = document.getElementById('botoes');
const color = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');

// configura botão e input para criar pixelboard.
createInput.id = 'board-size';
createButton.id = 'generate-board';
createButton.innerText = 'VQV';
secaoBotoes.appendChild(createInput);
secaoBotoes.appendChild(createButton);

// cria cores aleatórias.
function randomColors(opacity = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba( ${r}, ${g}, ${b}, ${opacity})`;
}

// adiciona e remove classe selected nas paletcolors quando clicadas. Referência: ADRIANA BIBERG.
function removeAddSelected() {
  color[0].classList.add('selected');
  function selectColor(selecionado) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    selecionado.target.classList.add('selected');
  }
  for (let indexSelect = 0; indexSelect < color.length; indexSelect += 1) {
    color[indexSelect].addEventListener('click', selectColor);
  }
}

// adiciona cores à paleta.
window.onload = function addColorToPixelBoard() {
  color[0].style.backgroundColor = 'black';
  for (let index = 1; index < 4; index += 1) {
    color[index].style.backgroundColor = randomColors();
  }
  removeAddSelected();
};

// configura botão para limpar board.
function cleanBoard() {
  const button = document.querySelector('#clear-board');
  function clean() {
    for (let indexPixels = 0; indexPixels < pixel.length; indexPixels += 1) {
      pixel[indexPixels].style.backgroundColor = 'white';
    }
  }
  button.addEventListener('click', clean);
}

// adiciona cor aos pixels.
function printColor() {
  pixel = document.querySelectorAll('.pixel');
  function print(selecionado) {
    const clicado = selecionado;
    const selected = document.querySelector('.selected');
    clicado.target.style.backgroundColor = selected.style.backgroundColor;
  }
  for (let indexPixels = 0; indexPixels < pixel.length; indexPixels += 1) {
    pixel[indexPixels].addEventListener('click', print);
  }
  cleanBoard();
}

// configura a tabela da pixelboard.
function configuraPixelBoard() {
  const cell = document.getElementsByTagName('td');
  for (let i = 0; i < cell.length; i += 1) {
    cell[i].style.width = '40px';
    cell[i].style.height = '40px';
    cell[i].style.border = '1px solid black';
    cell[i].style.backgroundColor = 'white';
    cell[i].classList.add('pixel');
  }
  printColor();
}

// cria tabela pixelboard.

function createPixelBoard() {
  for (let i = 0; i < boardSize; i += 1) {
    const createRow = createTable.insertRow(0);
    for (let j = 0; j < boardSize; j += 1) {
      createRow.insertCell(j);
    }
  }
  pixelBoard.appendChild(createTable);
  document.getElementById('board-size').value = null;
  configuraPixelBoard();
}
if (pixelBoard.innerHTML === '') {
  boardSize = 5;
  createPixelBoard();
}

// condições para criar a tabela pixelboard.
function createPixelBoardConditions() {
  pixelBoard.removeChild(createTable);
  boardSize = createInput.value;
  if (boardSize < 5 && boardSize > 0) {
    boardSize = 5;
  } if (boardSize > 50) {
    boardSize = 50;
  } if (boardSize === '') {
    alert('Board inválido!');
  }
  createPixelBoard();
}
createButton.addEventListener('click', createPixelBoardConditions);
