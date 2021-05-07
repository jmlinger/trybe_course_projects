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

const itemList = document.getElementsByTagName('li');
function printColorItemList(event) {
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
taskList.addEventListener('click', printColorItemList);
