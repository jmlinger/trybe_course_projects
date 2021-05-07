// adiciona texto a lista ao clicar no botao Adicionar;
const buttonAdd = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
function taskAdd() {
  const createItemList = document.createElement('li');
  createItemList.innerText = inputText.value;
  taskList.appendChild(createItemList);
  inputText.value = '';
}
buttonAdd.addEventListener('click', taskAdd);

// adiciona e remove cor ao item da lista selecionado. Referencia: Natalia de Souza Ribeiro, turma 11.
const itemList = document.getElementsByTagName('li');
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
