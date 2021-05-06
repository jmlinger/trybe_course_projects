let buttonAdd = document.querySelector('#criar-tarefa');
let inputText = document.querySelector('#texto-tarefa');
let taskList = document.querySelector('#lista-tarefas');
function taskAdd () {
  let itemLista = document.createElement('li');
  itemLista.innerText = inputText.value;
  taskList.appendChild(itemLista);
  inputText.value = '';
}
buttonAdd.addEventListener('click', taskAdd);