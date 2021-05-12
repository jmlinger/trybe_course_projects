function randomColors(opacity = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgba( ${r}, ${g}, ${b}, ${opacity})`;
}

// adiciona cores à paleta.
const color = document.getElementsByClassName('color');
color[0].style.backgroundColor = 'black';
for (let index = 1; index < 4; index += 1) {
  color[index].style.backgroundColor = randomColors();
}

// Cria e configura botão e input para criar pixelboard.
const createInput = document.createElement('input');
const createButton = document.createElement('button');
const secaoBotoes = document.getElementById('botoes');
createInput.id = 'board-size';
createButton.id = 'generate-board';
createButton.innerText = 'VQV';
secaoBotoes.appendChild(createInput);
secaoBotoes.appendChild(createButton);

// cria tabela pixelboard.
const buttonGenerateBoard = document.getElementById('generate-board');
const createTable = document.createElement('table');
const pixelBoard = document.getElementById('pixel-board');
function createPixelBoardConditions() {
  pixelBoard.innerHTML = null;
  boardSize = document.getElementById('board-size').value;
  if (boardSize < 5 && boardSize > 0) {
    boardSize = 5;
  } if (boardSize > 50) {
    boardSize = 50;
  } if (boardSize == '') {
    alert('Board inválido!');
  }
  createPixelBoard();
}

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
buttonGenerateBoard.addEventListener('click', createPixelBoardConditions);
  
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
