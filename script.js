// adiciona texto a lista ao clicar no botao Adicionar;
const buttonAdd = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
function taskAdd() {
  const createItemList = document.createElement('li');
  createItemList.innerText = inputText.value;
  createItemList.classList.add('item-da-lista');
  taskList.appendChild(createItemList);
  inputText.value = '';
}
buttonAdd.addEventListener('click', taskAdd);

// adiciona e remove cor ao item da lista selecionado. Referencia: Natalia de Souza Ribeiro, turma 11.
const itemList = document.getElementsByClassName('item-da-lista');
function printColorItemList(event) {
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
taskList.addEventListener('click', printColorItemList);

// adiciona e remove risco no item da lista selecionado com dblclick.
function riscaItemLista(event) {
  event.target.classList.toggle('completed');
}
taskList.addEventListener('dblclick', riscaItemLista);

// cria botoes na seçao de botoes.
const numeroDeBotoes = 2;
const sectionButtons = document.getElementById('secao-de-botoes');
for (let indexBotoes = 0; indexBotoes < numeroDeBotoes; indexBotoes += 1) {
  const createButton = document.createElement('button');
  createButton.classList.add('botao-da-secao');
  sectionButtons.appendChild(createButton);
}

// Apaga a lista. Referência: Rodrigo Merlone.
const botao1 = document.querySelectorAll('.botao-da-secao')[0];
botao1.id = 'apaga-tudo';
botao1.innerText = 'Apaga lista';
function clearList() {
  taskList.innerHTML = null;
}
botao1.addEventListener('click', clearList);

//
const botao2 = document.querySelectorAll('.botao-da-secao')[1];
botao2.id = 'remover-finalizados';
botao2.innerText = 'Remove tarefa finalizada';
function clearItem() {
  const completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].remove();
  }
}
botao2.addEventListener('click', clearItem);
